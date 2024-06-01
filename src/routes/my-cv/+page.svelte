<script lang="ts">
  import SectionHeader from "$lib/components/cv-builder/printcomponents/SectionHeader.svelte";
  import BulletList from "$lib/components/cv-builder/printcomponents/BulletList.svelte";
  import ThreeColumnSubHeader from "$lib/components/cv-builder/printcomponents/ThreeColumnSubHeader.svelte";
    
  // Font ideas: Garamond, Helvetica, Cambria, Georgia, Avenir
  let data = {
    name: "Matheus Ferreira Drumond",
    location: "Brasília, DF - Brazil",
    contact: [
      {
        label: "@meee-low",
        link: "https://www.github.com/meee-low/",
        icon: "fa-brands fa-github",
      },
      {
        label: "in/mfdrumond",
        link: "https://www.linkedin/in/mfdrumond/",
        icon: "fa-brands fa-linkedin",
      },
      {
        label: "mat_drumond@hotmail.com",
        link: "mailto:mat_drumond@hotmail.com",
        icon: "fa fa-envelope",
      },
      {
        label: "+55 51 98101-6400",
        link: "https://wa.me/555181016400/",
        icon: "fa-solid fa-mobile-screen-button",
      },
      {
        label: "meee-low.github.io/",
        link: "https://meee-low.github.io/",
        icon: "fa-solid fa-globe",
      },
    ],
    workExperience: [
      {
        company: "Grau Técnico Taguatinga",
        position: "Junior IT Technician",
        periodStart: "apr 2024",
        periodEnd: "now",
        bullets: [
          "Provided technical support for our employees, general eletronics maintenance and also guided students in our computer skills interactive courses.",
          "Developed complex spreadsheets and software to help with management and logistics, as well as some customer-facing products like a resume builder webpage.",
        ],
      },
      {
        company: "Gazeus Games",
        position: "Game Translator",
        periodStart: "nov 2020",
        periodEnd: "dec 2020",
        bullets: [
          "Worked from home and translated the mobile game Top Gun Legends from English to Brazilian Portuguese.",
        ],
      },
    ],
    education: [
      {
        institution: "UFRGS",
        degree: "B.S. Applied Mathematics",
        periodStart: "jun 2022",
        periodEnd: "jun 2026",
        estimate: true,
        bullets: [
          "Focused on data science and programming.",
          "Scientific Initiation: Studied advanced graduate-level topics in Representation Theory (Algebra) under the guidance of Leonardo Duarte Silva, delivering weekly lectures on what I learned.",
          "Strong background in Business and Economics from coursework completed in an Economics major before transitioning to Applied Mathematics (Economics degree not completed).",
        ],
      },
    ],
    accomplishments: [],
    certificates: [
      { institution: "DataCamp", title: "SQL Fundamentals" },
      { institution: "Yale (Coursera)", title: "Intro to Machine Learning" },
    ],
    projects: [
      { title: "Web Portfolio", description: "", bullets: [] },
      {
        title:
          "Tomato Wars: What Makes Critics and Audiences Disagree on Movies?",
        description:
          "An exploration of the Rotten Tomatoes dataset with the goal of finding out critical factors that make audiences' and critics' scores diverge.",
      },
    ],
    skills: [
      "Data Science Technologies: Python (Numpy, Pandas, Matplotlib, Seaborn, Jupyter Notebooks; basic knowledge of PyTorch); Excel (including pivot tables and Power Query); Power BI; SQL",
      "General Programming: Git; Linux and terminal environments; SQL (SQLite, Postgres).",
      "Web Development: HTML, JavaScript, TypeScript, CSS; Tailwind; Svelte; Django backends; Familiar with React.",
      "Theory: Machine Learning; Statistical modeling (regression, hypothesis testing).",
      "Soft Skills: Experienced in education, presentation, research, teaching and communicating technical concepts to non-technical audiences.",
      "Other Programming Languages and Tools: Neovim wizard; Beginner at Go, Kotlin and Rust.",
    ],
    languages: [
      { language: "English", level: "Fluent" },
      { language: "Brazilian Portuguese", level: "Native" },
      { language: "French", level: "Basic" },
      { language: "Spanish", level: "Basic" },
    ],
    awards: [], // <i class="fa-solid fa-medal"></i>
    extraSessions: [],
  };

  // https://stackoverflow.com/questions/6500962/how-to-print-only-a-selected-html-element
  // https://app.enhancv.com/resume-checker/results?key=resumeChecker/253c98e412c4538681ad9c3439e4658312d812d5e22684e28511d7b36fd3c81b.pdf#resumeCheckerSubsection-FormatAndSizeReport
</script>

<article>
  <section>
    <h1
      class="mb-4 text-center text-4xl uppercase font-bold tracking-wide print:mb-2 print:text-[14pt]"
    >
      {data.name}
    </h1>
  </section>

  <section
    class="mb-10 flex max-w-full flex-wrap gap-x-4 gap-y-2 place-content-between text-xs print:mb-2 print:gap-y-1 print:text-[6pt]"
  >
    <p class="">
      <i class="fa-solid fa-location-dot aria-hidden mr-1 text-teal-600"
      ></i>{data.location}
    </p>

    {#each data.contact as contact}
      <a class="text-nowrap" href={contact.link}>
        <i class="{contact.icon} mr-1 text-teal-600"></i>{contact.label}
      </a>
    {/each}
  </section>

  <section class="mb-6 print:mb-2">
    <SectionHeader faIcon="fa-solid fa-briefcase" sectionTitle="Experience"
    ></SectionHeader>
    <div class="grid grid-cols-1 gap-2 print:gap-1">
      {#each data.workExperience as we}
        <div>
          <ThreeColumnSubHeader
            left={we.position}
            center={we.company}
            right={we.periodStart + "–" + we.periodEnd}
          ></ThreeColumnSubHeader>
          <BulletList bullets={we.bullets}></BulletList>
        </div>
      {/each}
    </div>
  </section>

  <section class="mb-6 print:mb-2">
    <SectionHeader faIcon="fa-solid fa-graduation-cap" sectionTitle="Education"
    ></SectionHeader>
    {#each data.education as ed}
      <ThreeColumnSubHeader
        left={ed.institution}
        center={ed.degree}
        right={ed.periodStart +
          "–" +
          ed.periodEnd +
          (ed.estimate ? " (est.)" : "")}
      ></ThreeColumnSubHeader>
      <BulletList bullets={ed.bullets}></BulletList>
    {/each}
  </section>

  <section class="mb-6 print:mb-2">
    <SectionHeader faIcon="fa-solid fa-wrench" sectionTitle="Projects"
    ></SectionHeader>
    <div class="grid grid-cols-1 gap-2 px-2 print:gap-1">
      {#each data.projects as proj}
        <div class="">
          <h3 class="font-semibold">{proj.title}</h3>
          <p class="ml-6 print:leading-snug">{proj.description}</p>
          <BulletList bullets={proj.bullets}></BulletList>
        </div>
      {/each}
    </div>
  </section>

  <section class="mb-6 print:mb-2">
    <SectionHeader faIcon="fa-solid fa-shapes" sectionTitle="Skills"
    ></SectionHeader>
    <BulletList bullets={data.skills}></BulletList>
  </section>

  <section class="mb-6 print:mb-2">
    <SectionHeader
      faIcon="fa-solid fa-certificate"
      sectionTitle="Certificates and Courses"
    ></SectionHeader>
    <BulletList
      bullets={data.certificates.map(
        (cert) => cert.institution + ": " + cert.title,
      )}
      gridCols={2}
    ></BulletList>
  </section>

  <section class="mb-6 print:mb-2">
    <SectionHeader faIcon="fa-solid fa-comments" sectionTitle="Languages"
    ></SectionHeader>
    <BulletList
      bullets={data.languages.map((lang) => lang.language + ": " + lang.level)}
      gridCols={2}
    ></BulletList>
  </section>
</article>


<style>
  article {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  @media print {
    article * {
      visibility: visible;
    }

    @page {
      size: A4;
      margin: 1.5cm 2cm;
    }

    article {
      font-size: 10pt;
    }

    article .text-4xl {
      font-size: 14pt !important;
    }
    article .text-lg {
      font-size: 12pt !important;
    }

    article .text-sm {
      font-size: 8pt !important;
    }

    article .text-xs {
      font-size: 8pt !important;
    }

    section {
      page-break-inside: avoid;
      page-break-before: auto;
      page-break-after: auto;
    }
  }
</style>

<svelte:head>
  <title>MFD - Resume</title>
</svelte:head>