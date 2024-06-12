<script lang="ts">
  import PersonalInfo from "$lib/components/cv-builder/formcomponents/sections/PersonalInfo.svelte";
  import WorkExperience from "$lib/components/cv-builder/formcomponents/sections/WorkExperience.svelte";
  import Projects from "$lib/components/cv-builder/formcomponents/sections/Projects.svelte";
  import Education from "$lib/components/cv-builder/formcomponents/sections/Education.svelte";
  import FullCVRender from "$lib/components/cv-builder/printcomponents/FullCVRender.svelte";

  import { simpleCVStore as userInfo } from "$lib/components/cv-builder/cv-builder-simple";
  import { goto } from "$app/navigation";

  import { propertyStore } from "svelte-writable-derived";
  import BulletPointsSection from "$lib/components/cv-builder/formcomponents/sections/GenericBulletPointsSection.svelte";
  import { recursiveFlattenAndSerialize, flattenedToQuery } from "$lib/utils";

  let form: HTMLFormElement;

  async function handleFormSubmit() {
    const queryString = JSON.stringify($userInfo);
    console.log({ queryString });
    const targetUrl = "./test/view?data=" + queryString;
    await goto(targetUrl);
  }
</script>

<div class="grid lg:grid-cols-2">
  <div>
    <form bind:this={form} on:submit|preventDefault={handleFormSubmit}>
      <PersonalInfo data={propertyStore(userInfo, "personalInfo")}
      ></PersonalInfo>
      <WorkExperience workExperience={propertyStore(userInfo, "workExperience")}
      ></WorkExperience>
      <Education education={propertyStore(userInfo, "education")}></Education>
      <Projects projects={propertyStore(userInfo, "projects")}></Projects>
      <BulletPointsSection
        title="Skills"
        bullets={propertyStore(userInfo, "skills")}
      ></BulletPointsSection>
      <BulletPointsSection
        title="Languages"
        bullets={propertyStore(userInfo, "languages")}
      ></BulletPointsSection>
      <!-- <Volunteering></Volunteering> -->
      <button class="rounded-lg border p-2 hover:bg-gray-200" type="submit"
        >Enviar</button
      >
    </form>
  </div>
  <div class="border overflow-auto">
    <FullCVRender data={$userInfo}></FullCVRender>
  </div>
</div>

<svelte:head>
  <title>MFD - CV Builder Alpha</title>
</svelte:head>
