<script lang="ts">
  import SectionHeader from "./SectionHeader.svelte";
  import BulletList from "./BulletList.svelte";
  import ThreeColumnSubHeader from "./ThreeColumnSubHeader.svelte";
  import { type FullInfo } from "$lib/components/cv-builder/cv-builder-simple";
  import {
    yyyymmIsFutureDate,
    yyyymmToEstimateTag,
    yyyymmToShortLocale,
  } from "./dateFormatting";
  import PersonalInfo from "./PersonalInfo.svelte";
  import { onMount } from "svelte";
  import { selectedLanguage, selectedLanguageString as s } from "$lib/stores";
  import { formatBasicMarkdown } from "$lib/markdownParsing";

  onMount(() => {
    const header = document.getElementsByTagName("header")[0];
    const footer = document.getElementsByTagName("footer")[0];

    header.classList.add("print:hidden");
    footer.classList.add("print:hidden");

    return () => {
      const header = document.getElementsByTagName("header")[0];
      const footer = document.getElementsByTagName("footer")[0];

      header.classList.remove("print:hidden");
      footer.classList.remove("print:hidden");
    };
  });

  export let data: FullInfo;
</script>

<article
  class="mx-auto min-w-[80ch] max-w-[100ch] overflow-auto print:max-w-full"
>
  <section>
    <h1
      class="mb-4 text-center text-4xl font-bold uppercase tracking-wide print:text-[16pt]"
    >
      {data.personalInfo.name}
    </h1>
  </section>

  <section class="mb-4">
    <PersonalInfo data={data.personalInfo}></PersonalInfo>
  </section>

  {#if data.about && data.about.length > 0 }
    <section>
      <p class="border-l-2 mb-4 border-black pl-2 rounded-sm">
        {formatBasicMarkdown(data.about)}
      </p>
    </section>
  {/if}

  <div class="space-y-6 print:space-y-4">
    <section>
      <SectionHeader
        faIcon="fa-solid fa-briefcase"
        sectionTitle={$s.interactive.cvbuilder.workExperience.sectionHeader}
      ></SectionHeader>
      <div class="grid grid-cols-1 gap-2 print:gap-2">
        {#each data.workExperience as we}
          {#if we.position || we.employer || we.bulletPoints.some((b) => b.length > 0)}
            <div>
              <ThreeColumnSubHeader
                left={we.position}
                center={we.employer}
                right={yyyymmToShortLocale(we.dateStart, $selectedLanguage) +
                  "–" +
                  (yyyymmIsFutureDate(we.dateEnd)
                    ? ""
                    : yyyymmToShortLocale(we.dateEnd, $selectedLanguage))}
              ></ThreeColumnSubHeader>
              <BulletList bullets={we.bulletPoints}></BulletList>
            </div>
          {/if}
        {/each}
      </div>
    </section>

    <section>
      <SectionHeader
        faIcon="fa-solid fa-graduation-cap"
        sectionTitle={$s.interactive.cvbuilder.education.sectionHeader}
      ></SectionHeader>
      {#each data.education as ed}
        {#if ed.institution || ed.degree || ed.bulletPoints.some((b) => b.length > 0)}
          <ThreeColumnSubHeader
            left={ed.institution}
            center={ed.degree}
            right={yyyymmToShortLocale(ed.dateStart, $selectedLanguage) +
              "–" +
              yyyymmToShortLocale(ed.dateEnd, $selectedLanguage) +
              yyyymmToEstimateTag(ed.dateEnd)}
          ></ThreeColumnSubHeader>
          <BulletList bullets={ed.bulletPoints}></BulletList>
        {/if}
      {/each}
    </section>

    {#if data.projects.length > 0}
      <section>
        <SectionHeader
          faIcon="fa-solid fa-wrench"
          sectionTitle={$s.interactive.cvbuilder.projects.sectionHeader}
        ></SectionHeader>
        <div class="grid grid-cols-1 gap-2 print:gap-2">
          {#each data.projects as proj}
            {#if proj.title || proj.description || proj.link || proj.bulletPoints.some((b) => b.length > 0)}
              <div class="">
                <div
                  class="ml-2 flex flex-wrap place-content-between items-center gap-4"
                >
                  <h3 class="font-semibold">{proj.title}</h3>
                  {#if proj.link}
                    <a
                      class="inline text-xs tracking-tight hover:underline"
                      href={proj.link}
                      ><i class="fa-solid fa-link mr-0.5 scale-90"
                      ></i>{proj.link}</a
                    >
                  {/if}
                </div>
                {#if proj.description}
                  <p class="ml-6 italic print:leading-snug">
                    {proj.description}
                  </p>
                {/if}
                <BulletList bullets={proj.bulletPoints}></BulletList>
              </div>
            {/if}
          {/each}
        </div>
      </section>
    {/if}

    <section>
      <SectionHeader
        faIcon="fa-solid fa-shapes"
        sectionTitle={$s.interactive.cvbuilder.skills}
      ></SectionHeader>
      <BulletList bullets={data.skills.filter((s) => s.length > 0)}
      ></BulletList>
    </section>

    {#if data.coursesAndCertifications.length > 0}
      <section>
        <SectionHeader
          faIcon="fa-solid fa-certificate"
          sectionTitle={$s.interactive.cvbuilder.coursesAndCertifications}
        ></SectionHeader>
        <BulletList bullets={data.coursesAndCertifications} gridCols={2}
        ></BulletList>
      </section>
    {/if}

    <section>
      <SectionHeader
        faIcon="fa-solid fa-comments"
        sectionTitle={$s.interactive.cvbuilder.languages}
      ></SectionHeader>
      <BulletList bullets={data.languages} gridCols={4}></BulletList>
    </section>
  </div>
</article>

<style>
  article {
    font-family:
      "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
      Arial, sans-serif;
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
      font-size: 10.5pt;
    }

    article .text-4xl {
      font-size: 18pt !important;
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
