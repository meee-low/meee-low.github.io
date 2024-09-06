<script lang="ts">
  import PersonalInfo from "$lib/components/cv-builder/formcomponents/sections/PersonalInfo.svelte";
  import WorkExperience from "$lib/components/cv-builder/formcomponents/sections/WorkExperience.svelte";
  import Projects from "$lib/components/cv-builder/formcomponents/sections/Projects.svelte";
  import Education from "$lib/components/cv-builder/formcomponents/sections/Education.svelte";
  import FullCVRender from "$lib/components/cv-builder/printcomponents/FullCVRender.svelte";

  import { simpleCVStore as userInfo } from "$lib/components/cv-builder/cv-builder-simple";
  import { goto } from "$app/navigation";
  import { selectedLanguageString as s } from "$lib/stores";

  import { propertyStore } from "svelte-writable-derived";
  import BulletPointsSection from "$lib/components/cv-builder/formcomponents/sections/GenericBulletPointsSection.svelte";

  let form: HTMLFormElement;

  async function handleFormSubmit() {
    const queryString = JSON.stringify($userInfo);
    const targetUrl = "./test/view?data=" + encodeURI(queryString);
    await goto(targetUrl);
  }
</script>

<div class="grid lg:grid-cols-2">
  <div class="max-h-[100vh] overflow-auto p-2">
    <form
      bind:this={form}
      on:submit|preventDefault={handleFormSubmit}
      class="grid gap-4"
    >
      <PersonalInfo data={propertyStore(userInfo, "personalInfo")}
      ></PersonalInfo>
      <WorkExperience workExperience={propertyStore(userInfo, "workExperience")}
      ></WorkExperience>
      <Education education={propertyStore(userInfo, "education")}></Education>
      <Projects projects={propertyStore(userInfo, "projects")}></Projects>
      <BulletPointsSection
        title={$s.interactive.cvbuilder.skills}
        bullets={propertyStore(userInfo, "skills")}
      ></BulletPointsSection>
      <BulletPointsSection
        title={$s.interactive.cvbuilder.languages}
        bullets={propertyStore(userInfo, "languages")}
      ></BulletPointsSection>
      <!-- <Volunteering></Volunteering> -->
      <button
        class="rounded-lg bg-emerald-500 p-2 font-bold hover:bg-emerald-700"
        type="submit">{$s.interactive.cvbuilder.buttons.send}</button
      >
    </form>
  </div>
  <div class="max-h-[100vh] overflow-auto border p-2">
    <FullCVRender data={$userInfo}></FullCVRender>
  </div>
</div>

<svelte:head>
  <title>MFD - CV Builder Alpha</title>
</svelte:head>
