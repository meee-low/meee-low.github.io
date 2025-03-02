import type { FullInfo } from "./components/cv-builder/cv-builder-simple";

interface FullInfoWithLang {
  en: FullInfo;
  "pt-BR": FullInfo;
}

export const cvData: FullInfoWithLang = {
  en: {
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
          "Developed complex spreadsheets and software to help with management and logistics, as well as some customer-facing products like a resume builder webpage.",
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
          "Where you can find this CV and other projects I worked on.",
        link: "https://meee-low.github.io",
        bulletPoints: [],
      },
      {
        title:
          "Tomato Wars: What Makes Critics and Audiences Disagree on Movies?",
        description:
          "An exploration of the Rotten Tomatoes dataset with the goal of finding out critical factors that make audiences' and critics' scores diverge.",
        link: "",
        bulletPoints: [],
      },
      {
        title: "ZenResort",
        description:
          "A Django-powered web application providing booking, reservation, and CRM functionality for a countryside resort.",
        link: "",
        bulletPoints: [
          "Developed and maintained as a solo freelance project since Jan 2025.",
          "Tech Stack: Python, Django, Tailwind CSS, HTMX, PostgreSQL, SQLite.",
          "Features include: Booking system, room/reservation management panels, and CRM.",
          "Directly collaborated with the client to implement new features and address their needs.",
          "Currently planning expansion to offer the system as a SaaS solution.",
        ],
      },
    ],

    skills: [
      "Data Science Technologies: Python (Numpy, Pandas, Matplotlib, Seaborn, Jupyter Notebooks; basic knowledge of PyTorch); Excel (including pivot tables and Power Query); Power BI; SQL",
      "General Programming: Git; Linux and terminal environments; SQL (SQLite, Postgres), Docker.",
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
  },

  "pt-BR": {
    personalInfo: {
      name: "Matheus Ferreira Drumond",
      phone: "(51) 98101-6400",
      email: "mat_drumond@hotmail.com",
      github: "meee-low",
      linkedin: "mfdrumond",
      website: "meee-low.github.io/",
      location: "Porto Alegre, RS",
    },

    workExperience: [
      {
        employer: "Grau Técnico Taguatinga",
        position: "Assistente de Tecnologia Júnior",
        dateStart: "2024-04",
        dateEnd: "2025-02",
        bulletPoints: [
          "Atuei como ponto de contato para fornecedores de software, facilitando a implantação, treinamento e suporte em várias escolas da região — uma responsabilidade interinstitucional confiada a mim devido ao meu destaque na minha função.",
          "Monitorei estudantes dos nossos cursos interativos em áreas como Pacote Office, programação e design gráfico.",
          "Liderei sessões de treinamento para instrutores e funcionários e redigi manuais para acelerar a resolução de problemas técnicos comuns. Auxiliei os funcionários em dúvidas de tecnologia e de Pacote Office.",
          "Desenvolvi e mantive planilhas para ajudar no gerenciamento e logística.",
        ],
      },
      {
        employer: "Gazeus Games",
        position: "Tradutor de Jogos",
        dateStart: "2020-11",
        dateEnd: "2020-12",
        bulletPoints: [
          "Trabalhei home-office como freelancer e traduzi o jogo mobile Top Gun Legends do inglês para o português brasileiro.",
        ],
      },
    ],

    education: [
      {
        institution: "UFRGS",
        degree: "Bac. em Matemática Aplicada e Computacional",
        dateStart: "2022-06",
        dateEnd: "2026-12",
        bulletPoints: [
          "Eletivas focadas em ciência de dados, programação e economia.",
          "Iniciação Científica: Estudei tópicos avançados de pós-graduação (Teoria das Representações) sob a orientação de Leonardo Duarte Silva, ministrando palestras semanais sobre o que aprendi.",
          "Boa base em economia e administração devido a cadeiras estudadas no meu curso anterior, Ciências Econômicas, antes de trocar para Matemática Aplicada (curso de Ciências Econômicas não concluído).",
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
        title: "Portfólio Web",
        description:
          "Onde você pode encontrar esse currículo e o melhor lugar para visualizar meus projetos.",
        link: "https://meee-low.github.io",
        bulletPoints: [],
      },
      {
        title:
          "Tomato Wars: What Makes Critics and Audiences Disagree on Movies?",
        description:
          "Uma exploração do dataset da Rotten Tomatoes com o objetivo de descobrir fatores que fazem as pontuações do público e dos críticos divergir.",
        link: "",
        bulletPoints: [],
      },
      {
        title: "ZenResort",
        description:
          "Uma aplicação web que fornece funcionalidade de reservas, gerenciamento de quartos e CRM para um resort de campo.",
        link: "",
        bulletPoints: [
          "Desenvolvido como um projeto solo freelance desde janeiro de 2025.",
          "Stack: Python, Django, Tailwind CSS, HTMX, PostgreSQL, SQLite.",
          "Colaborei diretamente com o cliente para implementar novos recursos e atender às suas necessidades",
          "Planejo expandir esse projeto para oferecer o sistema como uma solução SaaS para mais empresas.",
        ],
      },
    ],

    skills: [
      "Tecnologias de Data Science: Python (Numpy, Pandas, Matplotlib, Seaborn, Jupyter Notebook; conhecimento básico de PyTorch); Excel (incluindo tabelas dinâmicas e Power Query); Power BI; SQL",
      "Programação em Geral: Git; Linux e ambientes de terminal; SQL (SQLite, Postgres); Docker.",
      "Web: HTML, JavaScript, TypeScript, CSS; Tailwind; Svelte; Django; Familiaridade com React.",
      "Teoria: Machine Learning; Modelagem Estatística (regressões, teste de hipóteses).",
      "Outras Linguagens de Programação e Ferramentas: Neovim; Iniciante em Go, Kotlin e Rust, sempre aprendendo coisas novas.",
    ],
    languages: [
      "**Português:** Nativo",
      "**Inglês:** Fluente",
      "**Francês**: Básico",
      "**Espanhol**: Básico",
    ],
    // awards: [], // <i class="fa-solid fa-medal"></i>
    // extraSessions: [],
  },
};
