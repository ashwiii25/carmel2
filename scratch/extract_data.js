const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const DOCTORS_DIR = path.join(__dirname, '../public/doctor _details');
const DEPTS_DIR = path.join(__dirname, '../public/departments');

async function extractText(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.txt') {
        return fs.readFileSync(filePath, 'utf-8');
    } else if (ext === '.docx') {
        const result = await mammoth.extractRawText({ path: filePath });
        return result.value;
    }
    return '';
}

function parseDoctorText(text, filename) {
    const lines = text.split('\n').map(l => l.trim());
    
    let name = filename.replace(/\.(txt|docx)$/i, '').trim();
    let speciality = 'General';
    let degrees = [];
    let bio = [];
    let parsingBio = true;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line) continue;
        
        if (line.toLowerCase().includes('profile details')) {
            parsingBio = false;
            continue;
        }
        
        if (parsingBio) {
            if (line.toLowerCase() === name.toLowerCase()) continue;
            if (line.toLowerCase().includes('dr.')) {
                if(bio.length === 0 && line.length < 50) continue; // skip name repetition
            }
            bio.push(line);
        } else {
            if (line.toLowerCase().startsWith('speciality')) {
                speciality = lines[i+1] ? lines[i+1].trim() : 'General';
                i++; // skip next line
            } else if (line.toLowerCase().startsWith('degree')) {
                const degLine = lines[i+1] ? lines[i+1].trim() : '';
                degrees = degLine.split(',').map(d => d.trim()).filter(Boolean);
                i++;
            }
        }
    }
    
    // Fallbacks if mapping failed
    if (bio.length === 0) {
        bio.push("Details to be updated.");
    }
    
    // Generate a clean slug
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    return {
        id: slug,
        slug: slug,
        name: name,
        speciality: speciality,
        departmentSlug: speciality.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        experience: '10+ Years', // Default fallback
        image: `/carmel_doc/${name.replace(/ /g, '-')}.webp`, // Optimistic path
        qualifications: degrees.length ? degrees : ['MBBS'],
        bio: bio.join('\n\n'),
        consultationHours: 'Contact hospital for timings',
        languages: ['English', 'Malayalam']
    };
}

function parseDeptText(text, filename) {
    const name = filename.replace(/\.(txt|docx)$/i, '').replace(/ department/i, '').trim();
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    const descLines = lines.filter(l => l.toLowerCase() !== name.toLowerCase());
    
    return {
        slug: slug,
        name: name,
        desc: descLines[0] || `${name} department provides comprehensive care.`,
        content: descLines.join('\n\n'),
        image: `/hero_slideshow/eb-website-image-hero-3840x2560.webp` // default fallback
    };
}

async function main() {
    const doctors = [];
    const depts = [];
    
    // Process Doctors
    if (fs.existsSync(DOCTORS_DIR)) {
        const files = fs.readdirSync(DOCTORS_DIR);
        for (const file of files) {
            if (file.endsWith('.txt') || file.endsWith('.docx')) {
                const text = await extractText(path.join(DOCTORS_DIR, file));
                doctors.push(parseDoctorText(text, file));
            }
        }
    }
    
    // Process Departments
    if (fs.existsSync(DEPTS_DIR)) {
        const files = fs.readdirSync(DEPTS_DIR);
        for (const file of files) {
            if (file.endsWith('.txt') || file.endsWith('.docx')) {
                const text = await extractText(path.join(DEPTS_DIR, file));
                depts.push(parseDeptText(text, file));
            }
        }
    }
    
    fs.writeFileSync(path.join(__dirname, 'doctors_data.json'), JSON.stringify(doctors, null, 2));
    fs.writeFileSync(path.join(__dirname, 'departments_data.json'), JSON.stringify(depts, null, 2));
    
    console.log(`Extracted ${doctors.length} doctors and ${depts.length} departments.`);
}

main().catch(console.error);
