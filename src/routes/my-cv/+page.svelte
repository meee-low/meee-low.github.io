<script lang="ts">
  import FullCVRender from "$lib/components/cv-builder/printcomponents/FullCVRender.svelte";
  import { cvData } from "$lib/myInfo";
  import { selectedLanguage } from "$lib/stores";

  $: lang = $selectedLanguage ?? "en";

  $: data = cvData[lang];

  // Font ideas: Garamond, Helvetica, Cambria, Georgia, Avenir

  // https://stackoverflow.com/questions/6500962/how-to-print-only-a-selected-html-element
  // https://app.enhancv.com/resume-checker/results?key=resumeChecker/253c98e412c4538681ad9c3439e4658312d812d5e22684e28511d7b36fd3c81b.pdf#resumeCheckerSubsection-FormatAndSizeReport
</script>

<div class="my-8 print:my-0">
  <FullCVRender {data}></FullCVRender>
</div>

<svelte:head>
  <title>MFD - {lang === "en" ? "Resume" : "Currículo"}</title>
</svelte:head>
