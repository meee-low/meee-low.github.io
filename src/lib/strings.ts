// General

interface NavBarAndFooter {
  highlights: string;
  interactive: string;
  blog: string;
  resumecv: string;
  location: string;
}

// Portfolio

interface PortfolioTags {
  Python: string;
  Data: string;
  Business: string;
  "Backend/CLI": string;
  Other: string;
  Fun: string;
}

interface PortfolioCard {
  sourcecode: string;
}

// CV
interface CVStrings {
  // Headers, kinda
  personalInfo: {
    sectionHeader: string;
    name: string;
    phone: string;
    email: string;
    linkedin: string;
    website: string;
    github: string;
  };
  aboutMe: {
    sectionHeader: string;
  } | null;
  workExperience: {
    sectionHeader: string;
    position: string;
    employer: string;
    start: string;
    finish: string;
  };
  education: {
    sectionHeader: string;
    title: string;
    institution: string;
    startDate: string;
    endDate: string;
  };
  projects: {
    sectionHeader: string;
    projectTitle: string;
    description: string;
    linkToProject: string;
  };
  skills: string;
  languages: string;
  coursesAndCertifications: string;
  volunteering: string;

  // UI
  litBulletPoints: string;
  buttons: {
    addSubsection: string;
    addBulletPoints: string;
    send: string;
  };
  placeholders: {
    name: string;
    phone: string;
    email: string;
    genericExamplePlaceholder: string;
    website: string;
    dateYYYYMM: string;
  };
}

// Full

interface FullLang {
  navbarandfooter: NavBarAndFooter;
  portfolio: {
    filters: PortfolioTags;
    portfoliocard: PortfolioCard;
  };
  interactive: {
    cvbuilder: CVStrings;
    ranker: {
      sendButtonText: string;
    };
  };
}

const strings: Record<"en" | "pt-BR", FullLang> = {
  en: {
    navbarandfooter: {
      highlights: "Highlights",
      interactive: "Interactive",
      blog: "Blog",
      resumecv: "Resume",
      location: "Brasília, DF - Brazil",
    },
    portfolio: {
      filters: {
        Python: "Python",
        Data: "Data",
        Business: "Business",
        "Backend/CLI": "Backend/CLI",
        Other: "Other",
        Fun: "Fun",
      },
      portfoliocard: {
        sourcecode: "Source code",
      },
    },
    interactive: {
      cvbuilder: {
        personalInfo: {
          sectionHeader: "Personal Info",
          name: "Name",
          phone: "Phone Number",
          email: "Email Adress",
          linkedin: "LinkedIn",
          website: "Website",
          github: "GitHub",
        },
        workExperience: {
          sectionHeader: "Work Experience",
          position: "Position",
          employer: "Employer",
          start: "Start Date",
          finish: "End Date",
        },
        education: {
          sectionHeader: "Education",
          title: "Title",
          institution: "Institution",
          startDate: "Start Date",
          endDate: "End Date",
        },
        projects: {
          sectionHeader: "Projects",
          projectTitle: "Project Title",
          description: "Description",
          linkToProject: "Link to Project",
        },
        skills: "Skills",
        languages: "Languages",
        litBulletPoints: "Bullet Points",
        buttons: {
          addSubsection: "Add",
          addBulletPoints: "Add Bullet Point",
          send: "Send",
        },
        placeholders: {
          name: "John Doe",
          phone: "9-999-999-999",
          email: "example@example.com",
          genericExamplePlaceholder: "example",
          website: "example.com",
          dateYYYYMM: "YYYY-MM",
        },
        coursesAndCertifications: "Certifications",
        volunteering: "Volunteering",
      },
      ranker: {
        sendButtonText: "Rank",
      },
    },
  },
  "pt-BR": {
    navbarandfooter: {
      highlights: "Destaques",
      interactive: "Interativo",
      blog: "Blog",
      resumecv: "Currículo",
      location: "Brasília, DF - Brasil",
    },
    portfolio: {
      filters: {
        Python: "Python",
        Data: "Dados",
        Business: "BI",
        "Backend/CLI": "Backend/CLI",
        Other: "Outros",
        Fun: "Divertidos",
      },
      portfoliocard: {
        sourcecode: "Código-fonte",
      },
    },
    interactive: {
      cvbuilder: {
        personalInfo: {
          sectionHeader: "Informações Pessoais",
          name: "Nome Completo",
          phone: "Telefone",
          email: "Email",
          linkedin: "LinkedIn",
          website: "Website",
          github: "GitHub",
        },
        workExperience: {
          sectionHeader: "Experiência Profissional",
          position: "Cargo",
          employer: "Empregador",
          start: "Data de Início",
          finish: "Data de Término",
        },
        education: {
          sectionHeader: "Educação",
          title: "Título",
          institution: "Instituição",
          startDate: "Data de Início",
          endDate: "Data de Término",
        },
        projects: {
          sectionHeader: "Projetos",
          projectTitle: "Título",
          description: "Descrição",
          linkToProject: "Link",
        },
        skills: "Habilidades",
        languages: "Idiomas",
        litBulletPoints: "Tópicos",
        buttons: {
          addSubsection: "Adicionar",
          addBulletPoints: "Adicionar Tópico",
          send: "Enviar",
        },
        placeholders: {
          name: "Maria de Almeida",
          phone: "(99) 99999-9999",
          email: "exemplo@exemplo.com",
          genericExamplePlaceholder: "exemplo",
          website: "exemplo.com",
          dateYYYYMM: "AAAA-MM",
        },
        coursesAndCertifications: "Certificações",
        volunteering: "Voluntariado",
      },
      ranker: {
        sendButtonText: "Ranquear",
      },
    },
  },
};

export function selectLanguage(userLang: string | undefined): FullLang {
  if (typeof userLang === "undefined") {
    return strings.en;
  }
  const ptLangs = ["pt-BR", "pt"];
  if (ptLangs.includes(userLang)) {
    return strings["pt-BR"];
  }
  return strings.en;
}
