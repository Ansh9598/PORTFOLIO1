// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR ALL PERSONAL DATA
// Edit anything in this file to update the site. No UI component needs to
// change when you update your name, projects, skills, links, etc.
// ─────────────────────────────────────────────────────────────────────────

export type Category = 'AI/ML' | 'WEB' | 'DATABASE' | 'IOT';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  technologies: string[];
  features: string[];
  github: string | null; // null = not available yet, UI shows a disabled state
  demo: string | null;
}

export interface ExperienceItem {
  role: string;
  org: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const profile = {
  name: 'Ansh Uttam',
  firstName: 'Ansh',
  lastName: 'Uttam',
  title: 'Computer Science & Engineering Student — Python & SQL',
  tagline: 'Python • SQL • AI/ML • Full Stack',
  location: 'Chandigarh, India',
  email: 'anshuttam4@gmail.com',
  phone: '+91-95988-55037',
  availability: 'Open to opportunities',
  summary:
    "Computer Science & Engineering (AI & ML) student with hands-on experience in Python, SQL, and Linux, gained through academic projects, full-stack development, and machine learning work. Comfortable with structured troubleshooting, documenting processes, and working within defined procedures. A proactive, quick learner with strong communication skills.",
  heroDescription:
    "I build small, working systems end to end — from a Python data pipeline to a full-stack app — and I document every step so the next person (often future me) can pick it up without guessing.",
  resumePath: '/resume/Ansh_Uttam_Resume.pdf', // Placeholder: add the real file at this path
  social: {
    github: 'https://github.com/Ansh9598',
    linkedin: 'https://www.linkedin.com/in/anshuttam',
  },
};

export const heroWords = ['BUILD', 'LEARN', 'IMPACT'];

export const skills: SkillGroup[] = [
  { label: 'Programming', items: ['Python', 'Java', 'C/C++'] },
  { label: 'Databases', items: ['SQL', 'RDBMS Fundamentals'] },
  { label: 'Operating Systems', items: ['Linux', 'Basic Administration', 'Troubleshooting'] },
  { label: 'Web / Frameworks', items: ['React', 'FastAPI'] },
  { label: 'Tools & Platforms', items: ['Git', 'GitHub', 'Gmail', 'IEEE'] },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Technical Experience',
    org: 'Chandigarh University',
    location: 'Chandigarh, India',
    period: '10/2025 – Present',
    responsibilities: [
      'Built and debugged Python and SQL-based applications.',
      'Applied structured troubleshooting to identify and resolve issues.',
      'Developed full-stack solutions using Python, React, FastAPI, Java, and SQL.',
      'Documented processes, procedures, and testing results.',
      'Collaborated with peers to explore and extend existing codebases.',
      'Applied data structures, algorithms, and software engineering principles.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'B.E. Computer Science & Engineering (AI & ML)',
    institution: 'Chandigarh University',
    location: 'Chandigarh, India',
    period: '08/2024 – 06/2028',
    score: 'Current CGPA: 7.2',
  },
  {
    degree: 'Class XII',
    institution: 'Anubhav Inter College',
    location: 'Kanpur, Uttar Pradesh',
    period: '04/2022 – 12/2023',
    score: '87.3%',
  },
  {
    degree: 'Class X',
    institution: 'Anubhav Inter College',
    location: 'Kanpur, Uttar Pradesh',
    period: '04/2020 – 12/2021',
    score: '91.3%',
  },
];

export const projects: Project[] = [
  {
    id: 'fraud-detection',
    title: 'Data Imbalancing Techniques for Fraud Detection',
    description:
      'A Python and Scikit-learn machine learning pipeline built to improve fraud detection accuracy on imbalanced transaction data.',
    category: 'AI/ML',
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    features: [
      'SMOTE',
      'Random Oversampling',
      'Random Undersampling',
      'Logistic Regression',
      'Decision Tree',
      'Random Forest',
      'Precision',
      'Recall',
      'F1-Score',
      'Accuracy',
      'ROC-AUC',
    ],
    github: null,
    demo: null,
  },
  {
    id: 'voice-assistant',
    title: 'AI Chatbot — Real-Time In-Game Voice Assistant',
    description:
      'A real-time AI chatbot using Python, FastAPI, and WebSockets built for low-latency voice communication during gameplay.',
    category: 'WEB',
    technologies: ['Python', 'FastAPI', 'WebSockets'],
    features: [
      'Context-aware conversation',
      'Speech recognition',
      'AI-generated responses',
      'Real-time audio processing',
      'WebSocket communication',
      'Multiplayer interaction support',
    ],
    github: null,
    demo: null,
  },
  {
    id: 'smart-home',
    title: 'Smart Home Automation',
    description:
      'A real-time IoT-based smart home system using ESP32 and sensors for remote monitoring and control.',
    category: 'IOT',
    technologies: ['ESP32', 'Blynk', 'C++'],
    features: [
      'ESP32',
      'Sensors',
      'Wi-Fi',
      'Blynk',
      'Mobile app',
      'Cloud-connected pipeline',
      'Live sensor visualization',
      'Automation dashboard',
    ],
    github: null,
    demo: null,
  },
];

export const achievements = [
  { title: 'Project Expo — Ranked 4th', detail: 'Recognized among competing student teams for project quality and execution.' },
  { title: 'DSA Problem Solving', detail: 'Solved 30+ problems on LeetCode and HackerRank.' },
];

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const categoryFilters: Array<Category | 'ALL'> = ['ALL', 'AI/ML', 'WEB', 'DATABASE', 'IOT'];
