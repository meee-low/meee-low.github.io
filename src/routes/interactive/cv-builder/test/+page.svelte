<script lang="ts">
  import PersonalInfo from "$lib/components/cv-builder/formcomponents/sections/PersonalInfo.svelte";
  import WorkExperience from "$lib/components/cv-builder/formcomponents/sections/WorkExperience.svelte";
  import Projects from "$lib/components/cv-builder/formcomponents/sections/Projects.svelte";
  import Education from "$lib/components/cv-builder/formcomponents/sections/Education.svelte";
  import FullCVRender from "$lib/components/cv-builder/printcomponents/FullCVRender.svelte"

  import {simpleCVStore as userInfo} from "$lib/components/cv-builder/cv-builder-simple"

  import {propertyStore} from "svelte-writable-derived";
  import BulletPointsSection from "$lib/components/cv-builder/formcomponents/sections/BulletPointsSection.svelte";

  // $: console.log($userInfo);
</script>

<div class="grid lg:grid-cols-2">
<div>
  <form action="">
    <PersonalInfo data={propertyStore(userInfo, "personalInfo")}></PersonalInfo>
    <WorkExperience workExperience={propertyStore(userInfo, "workExperience")}></WorkExperience>
    <Education education={propertyStore(userInfo, "education")}></Education>
    <Projects projects={propertyStore(userInfo, "projects")}></Projects>
    <BulletPointsSection title="Skills" bullets={propertyStore(userInfo, "skills")}></BulletPointsSection>
    <BulletPointsSection title="Languages" bullets={propertyStore(userInfo, "languages")}></BulletPointsSection>
    <!-- <Volunteering></Volunteering> -->
    <input type="submit" />
  </form>
</div>
<div class="border">
<FullCVRender data={userInfo}></FullCVRender>
</div>
</div>