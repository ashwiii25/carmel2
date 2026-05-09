import {
  HeartPulse,
  Brain,
  Stethoscope,
  Activity,
  Syringe,
  Microscope,
  Pill,
  ShieldAlert,
  Baby,
  Eye,
  Bone,
  Ear,
  Smile,
  Scan,
  Dna,
  Microwave,
  Cross,
  Thermometer,
  Droplets,
  type LucideIcon,
} from "lucide-react";

export interface Department {
  id: string;
  slug: string;
  name: string;
  icon: LucideIcon;
  desc: string;
  fullDesc: string;
  category: "speciality" | "diagnostic" | "emergency" | "support";
  image: string;
  procedures: string[];
  facilities: string[];
}

export const departments: Department[] = [
  {
    id: "cardio",
    slug: "cardiology",
    name: "Cardiology",
    icon: HeartPulse,
    desc: "Comprehensive cardiac care including diagnostics and interventions.",
    fullDesc:
      "The Department of Cardiology at Carmel Hospital delivers world-class cardiac care with advanced diagnostics, interventional procedures, and a dedicated Cardiac Care Unit. Our team of experienced cardiologists provides comprehensive evaluation and treatment for all heart conditions, from preventive cardiology to complex interventions.",
    category: "speciality",
    image: "/carmel_dept/Cardiology-580x360.webp",
    procedures: [
      "ECG & Echo Cardiogram",
      "Coronary Angiography",
      "Pacemaker Implantation",
      "Cardiac Stress Testing",
      "Holter Monitoring",
      "Doppler Studies",
    ],
    facilities: [
      "Cardiac Care Unit (CCU)",
      "Cath Lab",
      "Non-invasive Cardiology Lab",
      "Cardiac Rehabilitation Center",
    ],
  },
  {
    id: "derma",
    slug: "dermatology",
    name: "Dermatology",
    icon: Smile,
    desc: "Advanced treatments for skin, hair, and nail conditions.",
    fullDesc:
      "Our Dermatology department offers expert diagnosis and treatment for a wide range of skin, hair, and nail conditions. From common dermatological issues to complex autoimmune skin diseases, our specialists use the latest diagnostic tools and treatment modalities to deliver the best outcomes.",
    category: "speciality",
    image: "/carmel_dept/Dermatology-580x360.webp",
    procedures: [
      "Skin Biopsy",
      "Cryotherapy",
      "Phototherapy",
      "Cosmetic Dermatology",
      "Allergy Testing",
      "Laser Treatments",
    ],
    facilities: [
      "Dermatology OPD",
      "Phototherapy Unit",
      "Minor Procedure Room",
    ],
  },
  {
    id: "psych",
    slug: "psychiatry",
    name: "Psychiatry",
    icon: Brain,
    desc: "Mental health support and compassionate psychological care.",
    fullDesc:
      "The Department of Psychiatry at Carmel Hospital provides comprehensive mental health services in a compassionate and confidential environment. Our team of psychiatrists and clinical psychologists offers evaluation, counseling, and evidence-based treatment for a wide spectrum of mental health conditions.",
    category: "speciality",
    image: "/carmel_dept/Psychiatry-580x360.webp",
    procedures: [
      "Psychiatric Evaluation",
      "Cognitive Behavioral Therapy",
      "Psychotherapy",
      "De-addiction Programs",
      "Child & Adolescent Psychiatry",
    ],
    facilities: [
      "Outpatient Clinic",
      "Counseling Rooms",
      "Clinical Psychology Unit",
    ],
  },
  {
    id: "nephro",
    slug: "nephrology",
    name: "Nephrology & Dialysis",
    icon: Stethoscope,
    desc: "Expert care for kidney diseases and advanced dialysis facilities.",
    fullDesc:
      "Our Nephrology department specializes in the diagnosis and management of kidney diseases, offering comprehensive care from early detection to advanced dialysis. With state-of-the-art dialysis machines and experienced nephrologists, we provide both hemodialysis and peritoneal dialysis services round the clock.",
    category: "speciality",
    image: "/carmel_dept/Dialysis-580x360.webp",
    procedures: [
      "Hemodialysis",
      "Peritoneal Dialysis",
      "Kidney Biopsy",
      "AV Fistula Creation",
      "Transplant Evaluation",
    ],
    facilities: [
      "Dialysis Unit (24/7)",
      "Nephrology OPD",
      "Renal Function Lab",
    ],
  },
  {
    id: "emergency",
    slug: "emergency-medicine",
    name: "Emergency Medicine",
    icon: ShieldAlert,
    desc: "24/7 rapid response and trauma care readiness.",
    fullDesc:
      "The Emergency Department at Carmel Hospital operates 24/7, providing immediate life-saving care for trauma, cardiac emergencies, stroke, and other critical conditions. Our trained emergency physicians and rapid response teams are equipped with advanced life support systems and protocols to handle any emergency.",
    category: "emergency",
    image: "/carmel_dept/Emergency-Medicine-580x360.webp",
    procedures: [
      "Advanced Trauma Life Support",
      "Cardiac Resuscitation",
      "Emergency Intubation",
      "Fracture Stabilization",
      "Wound Management",
    ],
    facilities: [
      "24/7 Emergency Room",
      "Trauma Bay",
      "Observation Ward",
      "Ambulance Fleet",
    ],
  },
  {
    id: "surgery",
    slug: "general-surgery",
    name: "General Surgery",
    icon: Syringe,
    desc: "State-of-the-art surgical procedures and post-op care.",
    fullDesc:
      "The Department of General Surgery provides comprehensive surgical services ranging from minor procedures to complex major surgeries. Our surgeons are skilled in both conventional and minimally invasive techniques, ensuring faster recovery and optimal outcomes for every patient.",
    category: "speciality",
    image: "/carmel_dept/General-Surgery-580x360.webp",
    procedures: [
      "Appendectomy",
      "Hernia Repair",
      "Gallbladder Surgery",
      "Thyroid Surgery",
      "Breast Surgery",
      "Wound Care",
    ],
    facilities: [
      "Modular Operation Theatres",
      "Post-Operative ICU",
      "Day Surgery Unit",
    ],
  },
  {
    id: "radio",
    slug: "radiology",
    name: "Radiology",
    icon: Microscope,
    desc: "Precise imaging and advanced diagnostic protocols.",
    fullDesc:
      "The Department of Radiology at Carmel Hospital is equipped with cutting-edge imaging technology for accurate and timely diagnosis. From routine X-rays to advanced CT scans and MRI, our radiologists provide precise imaging services that support clinical decision-making across all departments.",
    category: "diagnostic",
    image: "/carmel_dept/Radiology-580x360.webp",
    procedures: [
      "Digital X-Ray",
      "CT Scan",
      "MRI",
      "Ultrasound",
      "Mammography",
      "Fluoroscopy",
    ],
    facilities: [
      "Digital Radiology Suite",
      "CT Scan Room",
      "Ultrasound Lab",
    ],
  },
  {
    id: "blood",
    slug: "blood-bank",
    name: "Blood Bank",
    icon: Droplets,
    desc: "Round-the-clock transfusion services and blood supplies.",
    fullDesc:
      "Our licensed Blood Bank operates 24/7, providing safe and screened blood and blood products for patients. With rigorous quality control measures and a dedicated team of transfusion medicine specialists, we ensure the highest standards of blood safety.",
    category: "diagnostic",
    image: "/carmel_dept/Blood-Bank-580x360.webp",
    procedures: [
      "Blood Collection",
      "Component Separation",
      "Cross-Matching",
      "Transfusion Services",
    ],
    facilities: [
      "Blood Storage Unit",
      "Component Lab",
      "Donor Lounge",
    ],
  },
  {
    id: "pharmacy",
    slug: "pharmacy",
    name: "Pharmacy",
    icon: Pill,
    desc: "24/7 access to authentic medications and medical supplies.",
    fullDesc:
      "The Carmel Hospital Pharmacy provides round-the-clock pharmaceutical services, ensuring patients have access to authentic, quality-assured medications at all times. Our pharmacists work closely with clinical teams to ensure safe dispensing and patient counseling.",
    category: "diagnostic",
    image: "/carmel_dept/Pharmacy-580x360.webp",
    procedures: [
      "Prescription Dispensing",
      "Patient Counseling",
      "Drug Information Services",
    ],
    facilities: [
      "24/7 Pharmacy Counter",
      "Drug Information Center",
    ],
  },
  {
    id: "ortho",
    slug: "orthopaedics",
    name: "Orthopaedics",
    icon: Bone,
    desc: "Expert bone, joint, and spine care with advanced surgical techniques.",
    fullDesc:
      "The Department of Orthopaedics offers comprehensive musculoskeletal care, from fracture management to joint replacement and spine surgery. Our orthopaedic surgeons combine expertise with advanced technology to restore mobility and improve quality of life.",
    category: "speciality",
    image: "/carmel_dept/Orthopaedics-580x360.webp",
    procedures: [
      "Joint Replacement",
      "Fracture Fixation",
      "Arthroscopy",
      "Spine Surgery",
      "Sports Injury Management",
    ],
    facilities: [
      "Ortho OPD",
      "Physiotherapy Unit",
      "Ortho Operation Theatre",
    ],
  },
  {
    id: "paed",
    slug: "paediatrics",
    name: "Paediatrics",
    icon: Baby,
    desc: "Gentle, specialized care for infants, children, and adolescents.",
    fullDesc:
      "Our Paediatrics department provides compassionate and comprehensive healthcare for children from birth through adolescence. With a child-friendly environment and experienced paediatricians, we ensure every young patient receives age-appropriate care.",
    category: "speciality",
    image: "/carmel_dept/Paediatrics-580x360.webp",
    procedures: [
      "Neonatal Care",
      "Vaccination Programs",
      "Growth Monitoring",
      "Paediatric Emergency Care",
      "Developmental Assessment",
    ],
    facilities: [
      "NICU",
      "PICU",
      "Paediatric Ward",
      "Vaccination Clinic",
    ],
  },
  {
    id: "ent",
    slug: "ent",
    name: "ENT",
    icon: Ear,
    desc: "Comprehensive ear, nose, and throat diagnosis and treatment.",
    fullDesc:
      "The ENT department at Carmel Hospital offers expert diagnosis and treatment for all ear, nose, and throat conditions. From hearing assessments to advanced microsurgeries, our specialists provide personalized care for both adults and children.",
    category: "speciality",
    image: "/carmel_dept/ENT-580x360.webp",
    procedures: [
      "Tonsillectomy",
      "Septoplasty",
      "Tympanoplasty",
      "Audiometry",
      "Endoscopic Sinus Surgery",
    ],
    facilities: [
      "ENT OPD",
      "Audiology Lab",
      "ENT Operation Theatre",
    ],
  },
  {
    id: "ophthal",
    slug: "ophthalmology",
    name: "Ophthalmology",
    icon: Eye,
    desc: "Advanced eye care from routine exams to complex surgeries.",
    fullDesc:
      "Our Ophthalmology department provides complete eye care services including routine vision testing, cataract surgery, glaucoma management, and retinal procedures. Using state-of-the-art ophthalmic equipment, our specialists deliver precise diagnosis and treatment.",
    category: "speciality",
    image: "/carmel_dept/Ophthalmology-580x360.webp",
    procedures: [
      "Cataract Surgery",
      "Glaucoma Treatment",
      "Retinal Procedures",
      "Refractive Correction",
      "Corneal Treatments",
    ],
    facilities: [
      "Eye OPD",
      "Ophthalmic Operation Theatre",
      "Vision Testing Lab",
    ],
  },
  {
    id: "gynae",
    slug: "gynaecology",
    name: "Gynaecology & Obstetrics",
    icon: Cross,
    desc: "Complete women's health services from adolescence to menopause.",
    fullDesc:
      "The Department of Gynaecology & Obstetrics at Carmel Hospital offers comprehensive women's health services. From routine prenatal care to high-risk pregnancies, fertility treatments, and gynaecological surgeries, our team provides compassionate, expert care at every stage of a woman's life.",
    category: "speciality",
    image: "/carmel_dept/Gynaecology-580x360.webp",
    procedures: [
      "Normal & Caesarean Delivery",
      "Hysterectomy",
      "Laparoscopic Gynaecology",
      "Fertility Assessment",
      "Prenatal Screening",
    ],
    facilities: [
      "Labour Ward",
      "Neonatal ICU",
      "Gynaecology OPD",
      "Antenatal Clinic",
    ],
  },
  {
    id: "genmed",
    slug: "general-medicine",
    name: "General Medicine",
    icon: Thermometer,
    desc: "Primary care and internal medicine for all age groups.",
    fullDesc:
      "The Department of General Medicine serves as the cornerstone of clinical care at Carmel Hospital. Our internal medicine specialists provide expert diagnosis and management of a wide range of medical conditions, coordinating with specialty departments for comprehensive treatment plans.",
    category: "speciality",
    image: "/carmel_dept/General-Medicine-580x360.webp",
    procedures: [
      "Health Check-ups",
      "Chronic Disease Management",
      "Infectious Disease Treatment",
      "Diabetes Management",
      "Hypertension Control",
    ],
    facilities: [
      "Medicine OPD",
      "Medical ICU (MICU)",
      "General Wards",
    ],
  },
  {
    id: "laparo",
    slug: "laparoscopic-surgery",
    name: "Laparoscopic Surgery",
    icon: Scan,
    desc: "Minimally invasive surgical techniques for faster recovery.",
    fullDesc:
      "Our Laparoscopic Surgery division specializes in minimally invasive procedures that offer patients smaller incisions, less pain, and faster recovery times. Using advanced high-definition camera systems and specialized instruments, our surgeons perform complex procedures with remarkable precision.",
    category: "speciality",
    image: "/carmel_dept/Laparoscopic-Surgery-580x360.webp",
    procedures: [
      "Laparoscopic Cholecystectomy",
      "Laparoscopic Appendectomy",
      "Laparoscopic Hernia Repair",
      "Diagnostic Laparoscopy",
    ],
    facilities: [
      "Advanced Laparoscopy Suite",
      "HD Camera Systems",
    ],
  },
  {
    id: "physio",
    slug: "physiotherapy",
    name: "Physiotherapy & Rehabilitation",
    icon: Activity,
    desc: "Structured rehabilitation programs for complete recovery.",
    fullDesc:
      "The Physiotherapy & Rehabilitation department helps patients regain mobility, strength, and independence after surgery, injury, or illness. Our physiotherapists create individualized treatment plans combining manual therapy, exercises, and advanced modalities.",
    category: "support",
    image: "/carmel_dept/Physiotherapy-580x360.webp",
    procedures: [
      "Post-Surgical Rehabilitation",
      "Musculoskeletal Therapy",
      "Neurological Rehabilitation",
      "Cardiac Rehabilitation",
      "Pain Management",
    ],
    facilities: [
      "Physiotherapy Gym",
      "Electrotherapy Unit",
      "Hydrotherapy Pool",
    ],
  },
  {
    id: "anaes",
    slug: "anaesthesia",
    name: "Anaesthesia",
    icon: Dna,
    desc: "Safe anaesthesia services supporting all surgical departments.",
    fullDesc:
      "The Department of Anaesthesia ensures patient safety and comfort during surgical procedures. Our anaesthesiologists provide pre-operative assessments, intra-operative monitoring, and post-operative pain management using the latest techniques and equipment.",
    category: "support",
    image: "/carmel_dept/Anaesthesia-580x360.webp",
    procedures: [
      "General Anaesthesia",
      "Regional Anaesthesia",
      "Epidural Analgesia",
      "Pain Clinic Services",
      "ICU Management",
    ],
    facilities: [
      "Pre-Anaesthetic Clinic",
      "Recovery Room",
      "Pain Management Unit",
    ],
  },
  {
    id: "clinical-psych",
    slug: "clinical-psychology",
    name: "Clinical Psychology",
    icon: Brain,
    desc: "Evidence-based psychological assessment and therapeutic services.",
    fullDesc:
      "Our Clinical Psychology department offers evidence-based psychological assessment and intervention services. Working alongside psychiatry, our clinical psychologists provide psychometric evaluations, individual therapy, group therapy, and specialized programs for stress, anxiety, and behavioral issues.",
    category: "speciality",
    image: "/carmel_dept/Clinical-Psychology-580x360.webp",
    procedures: [
      "Psychometric Assessment",
      "Individual Therapy",
      "Group Therapy",
      "Behavioral Modification",
      "Stress Management Programs",
    ],
    facilities: [
      "Psychology OPD",
      "Therapy Rooms",
      "Group Session Hall",
    ],
  },
  {
    id: "dental",
    slug: "dental",
    name: "Dental Care",
    icon: Smile,
    desc: "Complete dental services from preventive care to oral surgery.",
    fullDesc:
      "The Dental Department at Carmel Hospital provides a full spectrum of dental care services including preventive dentistry, restorative procedures, orthodontics, and oral surgery. Our dental surgeons use modern equipment and techniques to ensure comfortable and effective treatments.",
    category: "speciality",
    image: "/carmel_dept/Dental-580x360.webp",
    procedures: [
      "Root Canal Treatment",
      "Dental Implants",
      "Orthodontics",
      "Oral Surgery",
      "Cosmetic Dentistry",
      "Preventive Care",
    ],
    facilities: [
      "Dental OPD",
      "Dental X-Ray",
      "Minor OT",
    ],
  },
  {
    id: "hemalab",
    slug: "hematology-lab",
    name: "Hematology Lab",
    icon: Microscope,
    desc: "Advanced blood testing and hematological diagnostic services.",
    fullDesc:
      "Our Hematology Laboratory provides comprehensive blood testing and diagnostic services. Equipped with automated analyzers and staffed by experienced pathologists, we deliver accurate and timely results that support clinical decision-making across the hospital.",
    category: "diagnostic",
    image: "/carmel_dept/Hematology-Lab-580x360.webp",
    procedures: [
      "Complete Blood Count",
      "Coagulation Studies",
      "Blood Typing",
      "Peripheral Smear Review",
      "Bone Marrow Aspiration",
    ],
    facilities: [
      "Automated Hematology Lab",
      "Coagulation Lab",
      "Sample Collection Center",
    ],
  },
];

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}

export function getDepartmentsByCategory(category: string): Department[] {
  if (category === "all") return departments;
  return departments.filter((d) => d.category === category);
}
