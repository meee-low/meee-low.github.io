import type { FullInfo } from "./components/cv-builder/cv-builder-simple";

interface FullInfoWithLang {
  en: FullInfo;
  "pt-BR": FullInfo;
}

export const cvData: FullInfoWithLang = {
  en: {
    about: "For me, coding is like solving a puzzle with superpowers. I love building little tools that make big differences, finding patterns in data, and making things run smoother. And as much as I love talking to computers, I enjoy talking to people just as much!",
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
        employer: "ZenResort (projeto solo)",
        position: "Desenvolvedor Web",
        dateStart: "2025-01",
        dateEnd: "2030-12",
        bulletPoints: [
          "Developed an internal web app providing booking, room management and CRM for a countrysside resort.",
          "Stack: Python, Django, Tailwind CSS, HTMX, PostgreSQL, SQLite.",
          "Directly collaborated with the client to implement new features and address their needs.",
          "Currently planning expansion to offer the system as a SaaS solution.",
        ],
      },
      {
        employer: "Grau Técnico Taguatinga",
        position: "Technology Assistant",
        dateStart: "2024-04",
        dateEnd: "2025-02",
        bulletPoints: [
          "Acted as the key point of contact for software vendors, facilitating deployment, training, and support across multiple schools—an cross-institutional responsibility entrusted to me due to my outstanding performance in my role.",
          "Taught students in our interactive courses, on topics such as computer skills, programming, and graphic design.",
          "Developed and led training sessions for teachers and staff. Authored manuals to streamline the resolution of common tech issues.",
          "Assisted staff with technology-related problems and automatized processes.",
          "Developed spreadsheets to help with management and logistics.",
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
          "Scientific Initiation: Studied advanced graduate-level topics in Representation Theory (Algebra) under the guidance of professor Leonardo Duarte Silva, delivering weekly lectures on what I learned.",
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
    about: "Para mim, programar é como resolver um quebra-cabeça com superpoderes. Adoro criar pequenas ferramentas que fazem uma grande diferença, encontrar padrões nos dados e deixar tudo funcionando de forma mais fluida. E por mais que eu goste de conversar com computadores, gosto igualmente de conversar com pessoas. Me dou bem com diferentes perfis, trabalho bem em equipe e acredito que boas relações fazem toda a diferença em qualquer projeto.",
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
        employer: "ZenResort (projeto solo)",
        position: "Web Developer",
        dateStart: "2025-01",
        dateEnd: "2030-12",
        bulletPoints: [
          "Criei uma aplicação web interna, que fornece funcionalidade de reservas, gerenciamento de quartos e CRM para um resort de campo.",
          "Stack: Python, Django, Tailwind CSS, HTMX, PostgreSQL, SQLite.",
          "Colaborei diretamente com o cliente para implementar novos recursos e atender às suas necessidades",
          "Planejo expandir esse projeto para oferecer o sistema como uma solução SaaS para mais empresas.",
        ],
      },
      {
        employer: "Grau Técnico Taguatinga",
        position: "Assistente de Tecnologia",
        dateStart: "2024-04",
        dateEnd: "2025-02",
        bulletPoints: [
          "Atuei como ponto de contato para fornecedores de software, facilitando a implantação, treinamento e suporte em várias escolas da região — uma responsabilidade interinstitucional confiada a mim devido ao meu destaque na minha função.",
          "Instruí os estudantes dos nossos cursos interativos em áreas como Pacote Office, programação e design gráfico.",
          "Liderei sessões de treinamento para instrutores e funcionários e redigi manuais para acelerar a resolução de problemas técnicos comuns. Auxiliei os funcionários em dúvidas de tecnologia e de Pacote Office.",
          "Desenvolvi e mantive planilhas para ajudar no gerenciamento e logística.",
        ],
      },
      {
        employer: "Gazeus Games",
        position: "Tradutor",
        dateStart: "2020-11",
        dateEnd: "2020-12",
        bulletPoints: [
          "Traduzi o jogo Top Gun Legends do inglês para o português, contratado temporariamente.",
        ],
      },
    ],

    education: [
      {
        institution: "UFRGS",
        degree: "Matemática Aplicada e Computacional",
        dateStart: "2022-06",
        dateEnd: "2026-12",
        bulletPoints: [
          "Eletivas focadas em ciência de dados, programação e economia.",
          "Iniciação Científica: Estudei tópicos avançados de pós-graduação (Teoria das Representações - Álgebra) sob a orientação do professor Leonardo Duarte Silva, ministrando palestras semanais sobre o que aprendi.",
          "Boa base em economia e administração devido a disciplinas estudadas no meu curso anterior, Ciências Econômicas, antes de trocar para Matemática Aplicada (curso de Ciências Econômicas não concluído).",
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
          "Onde você pode encontrar esse currículo e o melhor lugar para explorar meus projetos.",
        link: "https://meee-low.github.io",
        bulletPoints: [],
      },
      {
        title:
          "Tomato Wars: What Makes Critics and Audiences Disagree on Movies?",
        description:
          "Uma exploração do dataset do agregador de críticas de filmes Rotten Tomatoes com o objetivo de descobrir fatores em comum dos filmes em que as pontuações do público e dos críticos mais divergirem.",
        link: "",
        bulletPoints: [],
      },
    ],

    skills: [
      "Tecnologias de Data Science: Python (Numpy, Pandas, Matplotlib, Seaborn, Jupyter Notebook; conhecimento básico de PyTorch); Excel (incluindo tabelas dinâmicas e Power Query); Power BI; SQL.",
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
