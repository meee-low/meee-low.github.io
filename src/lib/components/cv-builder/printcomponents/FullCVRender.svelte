<script lang="ts">
  import SectionHeader from "./SectionHeader.svelte";
  import BulletList from "./BulletList.svelte";
  import ThreeColumnSubHeader from "./ThreeColumnSubHeader.svelte";
  import { type FullInfo } from "$lib/components/cv-builder/cv-builder-simple";
  import { type Readable } from "svelte/store";
  import { yyyymmIsFutureDate, yyyymmToDate, yyyymmToEstimateTag, yyyymmToShortLocale } from "./dateFormatting";
  import { type Intersect } from "$lib/utils";
  import PersonalInfo from "./PersonalInfo.svelte";

  const sectionTitlesWithLocale = {
    "pt-br": {
      education: "Formação Acadêmica",
      workExperience: "Experiência Profissional",
      skills: "Habilidades/Competências",
      certifications: "Certificações",
      languages: "Idiomas",
      projects: "Projetos",
    },
    en: {
      education: "Education",
      workExperience: "Work Experience",
      skills: "Skills",
      certifications: "Certificates and Courses",
      languages: "Languages",
      projects: "Projects",
    },
  };

  export let data: Readable<FullInfo>;

  export let locale: Intersect<
    Intl.LocalesArgument,
    keyof typeof sectionTitlesWithLocale
  > = "pt-br";
</script>

<article>
  <section>
    <h1
      class="mb-4 text-center text-4xl font-bold uppercase tracking-wide print:mb-2 print:text-[14pt]"
    >
      {$data.personalInfo.name}
    </h1>
  </section>

  <PersonalInfo data={$data.personalInfo}></PersonalInfo>

  <section class="mb-6 print:mb-2">
    <SectionHeader
      faIcon="fa-solid fa-briefcase"
      sectionTitle={sectionTitlesWithLocale[locale].workExperience}
    ></SectionHeader>
    <div class="grid grid-cols-1 gap-2 print:gap-1">
      {#each $data.workExperience as we}
        {#if we.position || we.employer || we.bulletPoints.some((b)=>b.length>0)}
          <div>
            <ThreeColumnSubHeader
              left={we.position}
              center={we.employer}
              right={yyyymmToShortLocale(we.dateStart, locale) +
                "–" + (yyyymmIsFutureDate(we.dateEnd)? "":
                yyyymmToShortLocale(we.dateEnd, locale))}
            ></ThreeColumnSubHeader>
            <BulletList bullets={we.bulletPoints}></BulletList>
          </div>
        {/if}
      {/each}
    </div>
  </section>

  <section class="mb-6 print:mb-2">
    <SectionHeader
      faIcon="fa-solid fa-graduation-cap"
      sectionTitle={sectionTitlesWithLocale[locale].education}
    ></SectionHeader>
    {#each $data.education as ed}
      {#if ed.institution || ed.degree || ed.bulletPoints.some((b)=>b.length>0) }
        <ThreeColumnSubHeader
          left={ed.institution}
          center={ed.degree}
          right={yyyymmToShortLocale(ed.dateStart, locale) +
            "–" +
            yyyymmToShortLocale(ed.dateEnd, locale) +
            yyyymmToEstimateTag(ed.dateEnd)
            }
        ></ThreeColumnSubHeader>
        <BulletList bullets={ed.bulletPoints}></BulletList>
      {/if}
    {/each}
  </section>

  {#if $data.projects.length > 0}
    <section class="mb-6 print:mb-2">
      <SectionHeader
        faIcon="fa-solid fa-wrench"
        sectionTitle={sectionTitlesWithLocale[locale].projects}
      ></SectionHeader>
      <div class="grid grid-cols-1 gap-2 px-2 print:gap-1">
        {#each $data.projects as proj}
          {#if proj.title || proj.description || proj.link || proj.bulletPoints.some(b=>b.length>0)}
            <div class="">
              <h3 class="font-semibold">{proj.title}</h3>
              <a href={proj.link}>{proj.link}</a>
              <p class="ml-6 print:leading-snug">{proj.description}</p>
              <BulletList bullets={proj.bulletPoints}></BulletList>
            </div>
          {/if}
        {/each}
      </div>
    </section>
  {/if}

  <section class="mb-6 print:mb-2">
    <SectionHeader
      faIcon="fa-solid fa-shapes"
      sectionTitle={sectionTitlesWithLocale[locale].skills}
    ></SectionHeader>
    <BulletList bullets={$data.skills}></BulletList>
  </section>

  {#if $data.coursesAndCertifications.length > 0}
    <section class="mb-6 print:mb-2">
      <SectionHeader
        faIcon="fa-solid fa-certificate"
        sectionTitle={sectionTitlesWithLocale[locale].certifications}
      ></SectionHeader>
      <BulletList bullets={$data.coursesAndCertifications} gridCols={2}
      ></BulletList>
    </section>
  {/if}

  <section class="mb-6 print:mb-2">
    <SectionHeader
      faIcon="fa-solid fa-comments"
      sectionTitle={sectionTitlesWithLocale[locale].languages}
    ></SectionHeader>
    <BulletList bullets={$data.languages} gridCols={2}></BulletList>
  </section>
</article>
