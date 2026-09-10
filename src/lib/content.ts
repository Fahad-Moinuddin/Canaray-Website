export const SITE = {
  name: "Canaray",
  tagline: "Specialists in oral radiology",
  phone: "1-877-498-9729",
  email: "info@canaray.com",
  hours: "Weekdays 7:30 AM – 7:00 PM · Weekends 8:30 AM – 5:00 PM",
  headOffice: "6605 Hurontario St. #605, Mississauga, ON L5T 0A3",
} as const;

export const PROOF = {
  dentists: "4,600+",
  reports: "450,000+",
  years: "15",
  radiologists: "Canadian-licensed Oral and Maxillofacial Radiologists",
} as const;

export const ASSETS = {
  logo: "/assets/logo/canaray-mark.png",
  heroVideo: "https://canaray.com/canaray/static/bentobox/videos/video_for_cover_v2.mp4",
  caseVideo: "https://canaray.com/canaray/static/bentobox/videos/whole_case_586736.mp4",
  icons: {
    computer:
      "https://canaray.com/canaray/static/bentobox/images/241217_CAN_3D_Icon_Computer.png",
    scanner:
      "https://canaray.com/canaray/static/bentobox/images/241217_CAN_3D_Icon_Scanner.png",
    atp: "https://canaray.com/canaray/static/bentobox/images/241217_CAN_3D_Icon_ATP.png",
    laptop:
      "https://canaray.com/canaray/static/bentobox/images/241217_CAN_3D_Icon_Laptop.png",
    tools:
      "https://canaray.com/canaray/static/bentobox/images/241217_CAN_3D_Icon_tools.png",
    qa: "https://canaray.com/canaray/static/bentobox/images/241217_CAN_3D_Icon_qa.png",
    app: "https://canaray.com/canaray/static/bentobox/images/241217_CAN_3D_Icon_app.png",
  },
} as const;

export type Location = {
  id: string;
  name: string;
  region: "Ontario GTA" | "Ontario" | "Alberta";
  address: string;
  city: string;
  note?: string;
};

export const LOCATIONS: Location[] = [
  {
    id: "toronto-downtown",
    name: "Toronto Downtown",
    region: "Ontario GTA",
    address: "65 Queen St. West, Unit 212",
    city: "Toronto, ON M5H 2M5",
  },
  {
    id: "toronto-midtown",
    name: "Toronto Midtown",
    region: "Ontario GTA",
    address: "2300 Yonge St. #2906",
    city: "Toronto, ON M4P 1E4",
  },
  {
    id: "mississauga",
    name: "Mississauga",
    region: "Ontario GTA",
    address: "6605 Hurontario St. #605",
    city: "Mississauga, ON L5T 0A3",
  },
  {
    id: "vaughan",
    name: "Vaughan",
    region: "Ontario GTA",
    address: "3300 Highway 7 West. #103",
    city: "Vaughan, ON L4K 4M3",
  },
  {
    id: "scarborough",
    name: "Scarborough",
    region: "Ontario GTA",
    address: "2075 Kennedy Road, Unit 403",
    city: "Scarborough, ON M1T 3V4",
  },
  {
    id: "oakville",
    name: "Oakville",
    region: "Ontario GTA",
    address: "165 Cross Avenue, Suite 200",
    city: "Oakville, ON L6J 0A9",
  },
  {
    id: "hamilton",
    name: "Hamilton",
    region: "Ontario GTA",
    address: "105 Main Street East, Suite 1106",
    city: "Hamilton, ON L8N 1G6",
  },
  {
    id: "guelph",
    name: "Guelph",
    region: "Ontario GTA",
    address: "34 Harvard Road #4",
    city: "Guelph, ON N1G 4V8",
  },
  {
    id: "barrie",
    name: "Barrie",
    region: "Ontario GTA",
    address: "222 Mapleview Drive West, Suite 301",
    city: "Barrie, ON L4N 9E7",
  },
  {
    id: "london",
    name: "London",
    region: "Ontario",
    address: "14361 Medway Road, Lower Level",
    city: "Arva, ON N0M 1C0",
    note: "Dentoalveolar CBCT scans available at this location.",
  },
  {
    id: "calgary",
    name: "Calgary",
    region: "Alberta",
    address: "Chinook Centre Prof Tower, 6455 Macleod Tr. SW, Unit 703",
    city: "Calgary, AB T2H 0K9",
  },
];

export type Service = {
  id: string;
  name: string;
  category: "cbct" | "other";
  summary: string;
  forWhom: string;
  why: string;
  audience: ("patient" | "dentist")[];
};

export const SERVICES: Service[] = [
  {
    id: "endo",
    name: "Endodontics",
    category: "cbct",
    summary:
      "High-resolution CBCT focused on root canal anatomy, missed canals, and periapical pathology.",
    forWhom: "Patients referred for complex root canal evaluation or retreatment planning.",
    why: "Gives your dentist a clear 3D view of canals and surrounding bone before treatment.",
    audience: ["patient", "dentist"],
  },
  {
    id: "impacted",
    name: "Impacted / wisdom teeth",
    category: "cbct",
    summary:
      "3D localization of impacted teeth relative to nerves, sinus, and adjacent roots.",
    forWhom: "Patients considering extraction of wisdom or other impacted teeth.",
    why: "Helps reduce surgical risk by mapping proximity to critical anatomy.",
    audience: ["patient", "dentist"],
  },
  {
    id: "orthognathic",
    name: "Orthognathic surgery",
    category: "cbct",
    summary:
      "Comprehensive jaw imaging to support surgical planning and orthodontic coordination.",
    forWhom: "Patients preparing for corrective jaw surgery.",
    why: "Provides the volumetric detail surgeons need for precise skeletal planning.",
    audience: ["patient", "dentist"],
  },
  {
    id: "implant",
    name: "Implant planning",
    category: "cbct",
    summary:
      "Bone volume, nerve pathways, and site assessment for dental implant placement.",
    forWhom: "Patients considering one or more dental implants.",
    why: "Supports safer implant placement with measurements your dentist can trust.",
    audience: ["patient", "dentist"],
  },
  {
    id: "tmj",
    name: "TMJ",
    category: "cbct",
    summary:
      "Cone-beam imaging of the temporomandibular joints to evaluate bony morphology.",
    forWhom: "Patients with jaw joint concerns referred for advanced imaging.",
    why: "Helps clarify joint anatomy when clinical findings alone are incomplete.",
    audience: ["patient", "dentist"],
  },
  {
    id: "pathology",
    name: "Bone pathology",
    category: "cbct",
    summary:
      "Detailed review of jaw lesions, unusual findings, and areas of concern in bone.",
    forWhom: "Patients with unexplained radiographic findings needing specialist review.",
    why: "Oral radiologists document findings clearly to guide next clinical steps.",
    audience: ["patient", "dentist"],
  },
  {
    id: "surgical-guides",
    name: "Surgical guides",
    category: "other",
    summary: "Guide fabrication support based on imaging and digital planning workflows.",
    forWhom: "Dental professionals placing implants with guided surgery protocols.",
    why: "Connects imaging to precise surgical execution.",
    audience: ["dentist"],
  },
  {
    id: "panoramic",
    name: "Panoramic radiographs",
    category: "other",
    summary: "Broad 2D overview of teeth, jaws, and surrounding structures.",
    forWhom: "Patients needing a full-arch screening image.",
    why: "A fast, familiar image for general assessment and referral context.",
    audience: ["patient", "dentist"],
  },
  {
    id: "ceph",
    name: "Cephalometric radiographs",
    category: "other",
    summary: "Standardized lateral or PA skull films used in orthodontic analysis.",
    forWhom: "Orthodontic and surgical patients requiring cephalometric records.",
    why: "Supports growth assessment and skeletal relationship analysis.",
    audience: ["patient", "dentist"],
  },
  {
    id: "clinical-photos",
    name: "Clinical photographs",
    category: "other",
    summary: "Standardized intraoral and extraoral photographic documentation.",
    forWhom: "Patients whose care plan benefits from visual clinical records.",
    why: "Creates a clear visual baseline for treatment planning and communication.",
    audience: ["patient", "dentist"],
  },
  {
    id: "impressions",
    name: "Digital impressions",
    category: "other",
    summary: "Intraoral scanning for digital models without traditional impression material.",
    forWhom: "Patients needing models for appliances, guides, or restorative work.",
    why: "More comfortable for many patients and ready for digital workflows.",
    audience: ["patient", "dentist"],
  },
  {
    id: "id-photos",
    name: "Identification photographs",
    category: "other",
    summary: "Patient identification photography used as part of clinical records.",
    forWhom: "Patients attending Canaray imaging appointments.",
    why: "Supports accurate record matching and safe clinical workflows.",
    audience: ["patient", "dentist"],
  },
];

export type ExampleCase = {
  id: string;
  title: string;
  focus: string;
  summary: string;
  video: string;
};

export const EXAMPLE_CASES: ExampleCase[] = [
  {
    id: "impacted",
    title: "Impacted tooth",
    focus: "Localization",
    summary: "Interactive 3D localization of an impacted tooth relative to adjacent structures.",
    video:
      "https://canaray.com/canaray/static/bentobox/videos/demo_canada_impacted_tooth_1350w.mp4",
  },
  {
    id: "tmj",
    title: "TMJ evaluation",
    focus: "Joints",
    summary: "Joint morphology reviewed in true 3D rather than static 2D slices alone.",
    video: "https://canaray.com/canaray/static/bentobox/videos/608401_tmj_example.mp4",
  },
  {
    id: "wisdom",
    title: "Wisdom tooth",
    focus: "Surgical risk",
    summary: "Nerve proximity and root morphology visualized for extraction planning.",
    video:
      "https://canaray.com/canaray/static/bentobox/videos/demo_canada_wisdom_tooth_1350w.mp4",
  },
  {
    id: "implant",
    title: "Implant site",
    focus: "Measurements",
    summary: "Bone dimensions and pathways presented for implant planning conversations.",
    video:
      "https://canaray.com/canaray/static/bentobox/videos/demo_canada_implant_1350w2.mp4",
  },
  {
    id: "endo",
    title: "Endodontic anatomy",
    focus: "Canals",
    summary: "Canal morphology and surrounding bone rendered for endodontic decision-making.",
    video:
      "https://canaray.com/canaray/static/bentobox/videos/demo_canada_endo_tooth_1350w2.mp4",
  },
  {
    id: "pathology",
    title: "Pathology review",
    focus: "Findings",
    summary: "Lesion extent and relationships communicated with scrollable 3D context.",
    video:
      "https://canaray.com/canaray/static/bentobox/videos/demo_canada_pathology_1350w_578286.mp4",
  },
];

export const NAV = [
  { href: "/patients", label: "For Patients" },
  { href: "/dentists", label: "For Dentists" },
  { href: "/services", label: "Services" },
  { href: "/technology", label: "3D Reports" },
  { href: "/cases", label: "Example Cases" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
] as const;
