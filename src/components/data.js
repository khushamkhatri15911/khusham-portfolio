// ✏️ EDIT THESE: your details are used across the whole site.
export const PROFILE = {
  name: "Khusham Khatri",
  headline: "Data Science | IT Project Management | Software Development | Power BI | SQL & Databases",
  blurb:
    "Building data-driven products and web applications that solve real-world problems. Combining data, technology, and practical problem-solving to create meaningful solutions.",
  location: "Calgary, Canada",
  email: "khatri.khusham15911@gmail.com",
  github: "https://github.com/khushamkhatri15911",
  linkedin: "https://www.linkedin.com/in/khusham-khatri-a11506243",
  // Put your PDF in the project's /public folder with exactly this name:
  resume: "/Khusham_Khatri_Resume.pdf",
};

// ✏️ About section: education entries (newest first).
export const EDUCATION = [
  {
    school: "SAIT (Southern Alberta Institute of Technology)",
    degree: "Post Graduate Diploma, Data Science and IT Project Management",
    detail: "May 2025 – August 2026",
  },
  {
    school: "Jai Hind College, Mumbai",
    degree: "Bachelor of Vocational Studies in Software Development",
    detail: "May 2020 – May 2023",
  },
];

// ✏️ Contact form: paste your Formspree form URL here (e.g. "https://formspree.io/f/abcdwxyz").
// Leave it empty and the form opens the visitor's email app instead.
export const FORM_ENDPOINT = "";

// ✏️ Experience cards (newest first). Add more objects to add more cards.
// Leave `location` empty ("") to hide that line.
export const EXPERIENCE = [
  {
    role: "Software Development Eng. I",
    company: "Sophy e-Technologies Pvt. Ltd.",
    location: "",
    summary:
      "Developed and maintained responsive web applications using modern front-end technologies, with backend development using Node.js and Django. Built reusable components, integrated RESTful APIs, and worked with SQL and NoSQL databases to deliver scalable, data-driven features. Collaborated with cross-functional teams in an Agile/Scrum environment, contributing to development, testing, debugging, code reviews, and performance optimization. Used Git for version control and collaborative software development.",
    tags: [
  "React.js",
  "Node.js",
  "REST APIs",
  "SQL",
  "NoSQL",
  "Git",
  "Full-Stack Development",
  "Responsive Web Development",
  "API Integration",
  "Testing & Debugging"
],
    dates: "May 2023 – Mar 2024",
  },
];

// ✏️ Tech Arsenal groups. Add or remove tags freely.
export const SKILLS = [
  {
    group: "Languages",
    tags: ["Python", "JavaScript", "SQL", "R"],
  },
  {
    group: "Web Development",
    tags: ["React.js", "Node.js", "Django", "FastAPI", "Tailwind CSS", "REST APIs"],
  },
  {
    group: "AI & Real-Time Systems",
    tags: ["LLM Integration", "Prompt Engineering", "LiveKit", "WebRTC", "Pydantic"],
  },
  {
    group: "Data & Databases",
    tags: ["PostgreSQL", "MongoDB", "NoSQL", "SQLAlchemy", "Power BI", "Excel"],
  },
  {
    group: "DevOps & Deployment",
    tags: ["Docker", "Vercel", "Render"],
  },
  {
    group: "Tools & Practices",
    tags: ["Git", "GitHub", "VS Code", "Postman", "Jira", "Agile"],
  },
];

// ✏️ Projects. Edit the text, tags, dates and links yourself.
// - Add more projects by copying a { ... } block inside `items`.
// - Add a new category by copying a whole { category, items } block.
// - `demo` is optional: paste a live link and a "Live demo" button appears.
export const PROJECTS = [
  {
    category: "Category Name",
    items: [
      {
        name: "Voice Interview Coach – Real-Time AI Mock Interviews",
        date: "",
        description:
          
    "Built and deployed a voice AI app that conducts spoken mock interviews, writes tailored questions from a resume and job posting, and scores answers on clarity, structure, specificity and technical depth. A streaming LiveKit, Deepgram and LLM pipeline responds in about a second, and a FastAPI and PostgreSQL backend stores every interview and powers a progress chart.",
        tags: ["Python", "FastAPI", "React", "PostgreSQL", "LiveKit", "LLM", "Docker"],
        github: "https://github.com/khushamkhatri15911/voice-interview-coach",
        demo: "https://voice-interview-coach-six.vercel.app/",
      },

      {
        name: "IndexLens",
        date: "",
        description:
          "Deployed a 3-node MongoDB replica set on Atlas, explored primary/secondary read routing, and benchmarked a 200k-document collection with Python. A compound index cut documents scanned from 200,000 to 2 and server query time from 153 ms to 2 ms (about 76x faster)",
        tags: ["MongoDB", "MongoDB Atlas", "Replica Set","Indexing","Performance Tuning"],
        github: "https://github.com/khushamkhatri15911/indexlens",
        demo: "",
      },
 

      {
        name: "Weather Tracker",
        date: "",
        description:
          "A responsive weather app built with React that fetches real-time conditions for any city using the OpenWeather API. It displays temperature, humidity, wind, and forecast details in a clean, easy-to-read interface",
        tags: ["Javascript", "React", "OpenWeather API","REST API"],
        github: "https://github.com/khushamkhatri15911/weather-app",
        demo: "https://weather-app-orcin-rho-dq7x7b276z.vercel.app/",
      },


      {
        name: "Cratic AI – UX Discovery & Merger Simulation",
        date: "",
        description:
          "Analyzed UX, organizational, and post-merger integration challenges using stakeholder analysis, risk assessment, and data-driven research. Developed merger integration recommendations using Agile project management, Jira, and stakeholder engagement frameworks.",
        tags: ["Project Management", "Agile", "Jira","UX Research","Business Analysis"],
        github: "",
        demo: "",
      },


      
      
      
      
    ],
  },
];
