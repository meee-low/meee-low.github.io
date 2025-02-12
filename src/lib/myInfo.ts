import type { FullInfo } from "./components/cv-builder/cv-builder-simple";

export const cvData: FullInfo = {
  personalInfo: {
    name: "Matheus Ferreira Drumond",
    phone: "+55 51 98101-6400",
    email: "mat_drumond@hotmail.com",
    github: "meee-low",
    linkedin: "mfdrumond",
    website: "meee-low.github.io/",
    location: "Porto Alegre, RS - Brazil",
  },

  workExperience: [
    {
      employer: "Grau Técnico Taguatinga",
      position: "Junior IT Technician",
      dateStart: "2024-04",
      dateEnd: "2025-02",
      bulletPoints: [
        "Acted as the key point of contact for software vendors, facilitating adoption, training, and support across multiple schools—an uncommon cross-institutional responsibility.",
        "Tutored students in our interactive courses, such as computer skills, programming, and graphic design.",
        "Developed and led training sessions for teachers and staff, creating instructional guides to troubleshoot common tech issues.",
      ],
    },
    {
      employer: "Gazeus Games",
      position: "Game Translator",
      dateStart: "2020-11",
      dateEnd: "2020-12",
      bulletPoints: [
        "Worked from home and translated the mobile game Top Gun Legends from English to Brazilian Portuguese.",
      ],
    },
  ],
  education: [
    {
      institution: "UFRGS",
      degree: "B.S. Applied Mathematics",
      dateStart: "2022-06",
      dateEnd: "2026-12",
      bulletPoints: [
        "Focused on data science and programming.",
        "Scientific Initiation: Studied advanced graduate-level topics in Representation Theory (Algebra) under the guidance of Leonardo Duarte Silva, delivering weekly lectures on what I learned.",
        "Strong background in Business and Economics from coursework completed in an Economics major before transitioning to Applied Mathematics (Economics degree not completed).",
      ],
    },
  ],
  // accomplishments: [],
  coursesAndCertifications: [
    "DataCamp: SQL Fundamentals",
    "Yale (Coursera): Introduction to Machine Learning",
  ],
  projects: [
    {
      title: "Web Portfolio",
      description:
        "Where you can find this CV and other projecs I've worked on.",
      link: "https://meee-low.github.io",
      bulletPoints: [],
    },
    {
      title: "ZenResort",
      description:
        "A Django-powered web application providing comprehensive booking, reservation, and CRM functionality for a countryside resort.",
      link: "",
      bulletPoints: [
        "Developed and maintained as a solo freelance project since Jan 2025.",
        "Tech Stack: Python, Django, Tailwind CSS, HTMX, PostgreSQL, SQLite.",
        "Features include: Booking system, room/reservation management panels, and CRM.",
        "Directly collaborated with the client to implement new features and address their needs.",
        "Currently planning expansion to offer the system as a SaaS solution.",
      ],
    },
    {
      title:
        "Tomato Wars: What Makes Critics and Audiences Disagree on Movies?",
      description:
        "An exploration of the Rotten Tomatoes dataset with the goal of finding out critical factors that make audiences' and critics' scores diverge.",
      link: "",
      bulletPoints: [],
    },
  ],
  skills: [
    "Data Science Technologies: Python (Numpy, Pandas, Matplotlib, Seaborn, Jupyter Notebooks; basic knowledge of PyTorch); Excel (including pivot tables and Power Query); Power BI; SQL",
    "General Programming: Git; Linux and terminal environments; SQL (SQLite, Postgres).",
    "Web Development: HTML, JavaScript, TypeScript, CSS; Tailwind; Svelte; Django backends; Familiar with React.",
    "Theory: Machine Learning; Statistical modeling (regression, hypothesis testing).",
    "Other Programming Languages and Tools: Neovim wizard; Beginner at Go, Kotlin and Rust.",
  ],
  languages: [
    "**English:** Fluent",
    "**Brazilian Portuguese:** Native",
    "**French**: Basic",
    "**Spanish**: Basic",
  ],
  // awards: [], // <i class="fa-solid fa-medal"></i>
  // extraSessions: [],
};
