const fs = require('fs');
const path = require('path');

const srcCode = fs.readFileSync('src/data/departments.ts', 'utf-8');
const data = JSON.parse(fs.readFileSync('scratch/departments_data.json', 'utf-8'));

const iconMap = {
  'anaesthesia': { icon: 'Dna', category: 'support' },
  'blood-bank': { icon: 'Droplets', category: 'diagnostic' },
  'cardiac-care-unit-ccu': { icon: 'Activity', category: 'speciality' },
  'cardiology': { icon: 'HeartPulse', category: 'speciality' },
  'clinical-laboratory': { icon: 'Microscope', category: 'diagnostic' },
  'clinical-psychology': { icon: 'Brain', category: 'speciality' },
  'dental': { icon: 'Smile', category: 'speciality' },
  'dermatology': { icon: 'Smile', category: 'speciality' },
  'emergency-medicine': { icon: 'ShieldAlert', category: 'emergency' },
  'ent-ear-nose-and-throat': { icon: 'Ear', category: 'speciality' },
  'general-medicine': { icon: 'Thermometer', category: 'speciality' },
  'general-surgery': { icon: 'Syringe', category: 'speciality' },
  'gynaecology': { icon: 'Cross', category: 'speciality' },
  'laparoscopic-surgery': { icon: 'Scan', category: 'speciality' },
  'medical-intensive-care-unit-micu': { icon: 'Activity', category: 'speciality' },
  'neonatal-intensive-care-unit-nicu': { icon: 'Baby', category: 'speciality' },
  'nephrology': { icon: 'Stethoscope', category: 'speciality' },
  'ophthalmology': { icon: 'Eye', category: 'speciality' },
  'orthopaedics': { icon: 'Bone', category: 'speciality' },
  'pediatric-intensive-care-unit-picu': { icon: 'Baby', category: 'speciality' },
  'pediatrics': { icon: 'Baby', category: 'speciality' },
  'pharmacy': { icon: 'Pill', category: 'diagnostic' },
  'physiotherapy': { icon: 'Activity', category: 'support' },
  'psychiatry': { icon: 'Brain', category: 'speciality' },
  'radiology': { icon: 'Microscope', category: 'diagnostic' },
  'sicu': { icon: 'Activity', category: 'speciality' },
};

let output = 'import {\n';
let importedIcons = new Set();
for (const key in iconMap) {
  importedIcons.add(iconMap[key].icon);
}
output += Array.from(importedIcons).join(',\n') + ',\ntype LucideIcon,\n} from "lucide-react";\n\n';

output += 'export interface Department {\n  id: string;\n  slug: string;\n  name: string;\n  icon: LucideIcon;\n  desc: string;\n  fullDesc: string;\n  category: "speciality" | "diagnostic" | "emergency" | "support" | string;\n  image: string;\n  procedures: string[];\n  facilities: string[];\n}\n\n';

output += 'export const departments: Department[] = [\n';

for (let i = 0; i < data.length; i++) {
  const d = data[i];
  if (['contact-page', 'carmel-medical-society', 'finance', 'hr', 'it', 'operations', 'public-relations', 'quality', 'nursing'].includes(d.slug)) {
    continue; // skip non-clinical departments
  }
  
  const mapping = iconMap[d.slug] || { icon: 'Activity', category: 'speciality' };
  
  output += '  {\n';
  output += '    id: "' + d.slug + '",\n';
  output += '    slug: "' + d.slug + '",\n';
  output += '    name: "' + d.name + '",\n';
  output += '    icon: ' + mapping.icon + ',\n';
  output += '    desc: ' + JSON.stringify(d.desc) + ',\n';
  output += '    fullDesc: ' + JSON.stringify(d.content.split('\n\n').slice(1).join('\n\n').trim() || d.content) + ',\n';
  output += '    category: "' + mapping.category + '",\n';
  // Attempt to use a real image if we can, otherwise use the placeholder
  output += '    image: "' + d.image + '",\n';
  output += '    procedures: [],\n';
  output += '    facilities: [],\n';
  output += '  },\n';
}

output += '];\n\n';
output += 'export function getDepartmentBySlug(slug: string): Department | undefined {\n  return departments.find((d) => d.slug === slug);\n}\n\n';
output += 'export function getDepartmentsByCategory(category: string): Department[] {\n  if (category === "all") return departments;\n  return departments.filter((d) => d.category === category);\n}\n';

fs.writeFileSync('scratch/departments_updated.ts', output);
console.log('Done');
