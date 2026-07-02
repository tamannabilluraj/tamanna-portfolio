
// -------------------- PERSONAL INFO --------------------
export const personalInfo = {
  name: 'Tamanna Billuraj',
  tagline: 'MSc Computer Science (Data Science)',
  subTagline: 'Aspiring Data Scientist • Machine Learning Enthusiast • AI Developer',
  introduction:
    "I'm a postgraduate Computer Science student specializing in Data Science. I'm passionate about machine learning, analytics, and building meaningful solutions from data. I enjoy transforming ideas into practical applications through continuous learning and hands-on projects.",
  location: 'Kochi, Kerala',
   email: 'tamannabilluraj1564@gmail.com', // EDIT ME: replace with real email
   resumeUrl: `${import.meta.env.BASE_URL}tamanna_resume.pdf`, // EDIT ME: drop your resume PDF in /public
  social: {
    github: 'https://github.com/tamannabilluraj', // EDIT ME
    linkedin: 'https://linkedin.com/in/tamannabillu', // EDIT ME
    email: 'mailto:tamannabilluraj1564@gmail.com',
  },
}

// -------------------- ABOUT SECTION --------------------
export const aboutInterests = [
  'Machine Learning',
  'Data Analytics',
  'Artificial Intelligence',
  'Problem Solving',
  'Continuous Learning',
]

// Animated stat cards on the About section. Values are editable — the numbers
// will count up on scroll.
export const aboutStats = [
  { id: 'projects', label: 'Projects', value: 6, suffix: '+' },
  { id: 'certifications', label: 'Certifications', value: 3, suffix: '+' },
  { id: 'technologies', label: 'Technologies', value: 15, suffix: '+' },
  { id: 'years', label: 'Years Learning', value: 3, suffix: '+' },
]

// -------------------- EDUCATION TIMELINE --------------------
export const education = [
  {
    id: 'msc-cs',
    degree: 'MSc Computer Science with Data Science',
    institution: 'Cochin University of Science & Technology',
    duration: '2025 – 2027',
    detail: '',
  },
  {
    id: 'bca-aiml',
    degree: 'Bachelor of Computer Applications (AI & ML)',
    institution: 'Christ Academy Institute for Advanced Studies, Bangalore University',
    duration: '2022 – 2025',
    detail: 'First Class with Distinction',
  },
]

// -------------------- SKILLS --------------------
// Add a new category by adding a new object here — the Skills section
// renders every category automatically.
export const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    skills: ['Python', 'R'],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    skills: [
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Feature Engineering',
      'Model Evaluation',
      'Statistical Analysis',
      'Exploratory Data Analysis',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Streamlit'],
  },
]

// -------------------- PROJECTS --------------------
// Add a new project by adding a new object to this array. `image` can point
// to a file in /src/assets or be left null to use the placeholder gradient.
export const projects = [
  {
    id: 'aqi-prediction',
    title: 'Bengaluru Air Quality Index Prediction System',
    description:
      'A machine learning web application that predicts Bengaluru AQI based on date and location using CatBoost.',
    highlights: ['MAE: 5.48', 'R\u00B2: 0.87'],
    technologies: ['Python', 'Pandas', 'NumPy', 'CatBoost', 'Scikit-learn', 'Streamlit', 'Folium', 'Matplotlib'],
    tags: ['Machine Learning', 'Data Science'],
    image: null,
    githubUrl: 'https://github.com/tamannabilluraj/bengaluru-aqi-prediction.git', // EDIT ME
    liveUrl: '', // EDIT ME: leave blank to hide the Live Demo button
    featured: true,
  },
  {
    id: 'kinetica',
    title: 'Kinetica',
    description:
      'A fitness tracking application for workouts, calorie intake, supplements, and personalized recommendations.',
    highlights: [],
    technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn', 'Figma'],
    tags: ['Web App', 'Health Tech'],
    image: null,
    githubUrl: 'https://github.com/tamannabilluraj/kinetica.git', // EDIT ME
    liveUrl: '',
    featured: false,
  },
  // ---- ADD FUTURE PROJECTS HERE ----
  // {
  //   id: 'unique-project-id',
  //   title: 'Project Title',
  //   description: 'One or two sentence description.',
  //   highlights: ['Metric 1', 'Metric 2'],
  //   technologies: ['Tech1', 'Tech2'],
  //   tags: ['Category'],
  //   image: null,
  //   githubUrl: '',
  //   liveUrl: '',
  //   featured: false,
  // },
]

// -------------------- CERTIFICATIONS --------------------
export const certifications = [
  {
    id: 'google-data-analytics',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera',
    date: 'March 2025',
    url: '', // EDIT ME: link to the credential
  },
  // ---- ADD FUTURE CERTIFICATES HERE ----
]

// -------------------- LEADERSHIP & ACTIVITIES --------------------
export const leadership = [
  {
    id: 'it-club-president',
    role: 'President',
    organization: 'IT Club',
  },
  {
    id: 'swa-secretary',
    role: 'Joint Secretary',
    organization: 'Student Welfare Association',
  },
  {
    id: 'arts-secretary',
    role: 'Arts Secretary',
    organization: 'Student Council',
  },
]

// -------------------- FUTURE GOALS ROADMAP --------------------
export const futureGoals = [
  { id: 'deep-learning', title: 'Learn Deep Learning', status: 'in-progress' },
  { id: 'publish-ml', title: 'Publish ML Projects', status: 'planned' },
  { id: 'open-source', title: 'Open Source Contributions', status: 'planned' },
  { id: 'research', title: 'Research in Data Science', status: 'planned' },
  { id: 'masters-projects', title: "Master's Projects", status: 'planned' },
  { id: 'internship', title: 'Internship', status: 'planned' },
]

// -------------------- NAVIGATION --------------------
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'goals', label: 'Goals' },
  { id: 'contact', label: 'Contact' },
]
