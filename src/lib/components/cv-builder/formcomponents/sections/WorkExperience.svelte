<script lang="ts">
  import type { Writable } from "svelte/store";
  import WorkExperienceUnit from "./WorkExperienceUnit.svelte";
  import { type WorkExperienceUnit as WorkExperienceUnitT } from "../../cv-builder-simple";
  // import writableDerived from "svelte-writable-derived";
  import { propertyStore } from "svelte-writable-derived";
  import { selectedLanguageString as s } from "$lib/stores";

  export let workExperience: Writable<WorkExperienceUnitT[]>;

  function addWorkExperience() {
    const emptyWorkExperience: WorkExperienceUnitT = {
      position: "",
      employer: "",
      dateStart: "",
      dateEnd: "",
      bulletPoints: [],
    };
    $workExperience.push(emptyWorkExperience);
    $workExperience = $workExperience; // Just to ensure reactivity.
  }
</script>

<section>
  <h2 class="inline-block text-lg font-bold">
    {$s.interactive.cvbuilder.workExperience.sectionHeader}
  </h2>
  <button
    type="button"
    class="rounded-md border px-2 py-1"
    on:click={addWorkExperience}
    >{$s.interactive.cvbuilder.buttons.addSubsection}</button
  >
  <div class="grid gap-4">
    {#each $workExperience as _, index}
      <WorkExperienceUnit data={propertyStore(workExperience, index)}
      ></WorkExperienceUnit>
    {/each}
  </div>
</section>
