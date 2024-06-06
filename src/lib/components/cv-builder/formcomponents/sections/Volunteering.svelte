
<script lang="ts">
  import type { Writable } from "svelte/store";
  import WorkExperienceUnit from "./WorkExperienceUnit.svelte";
  import { type WorkExperienceUnit as WorkExperienceUnitT } from "../../cv-builder-simple";
  // import writableDerived from "svelte-writable-derived";
  import { propertyStore } from "svelte-writable-derived";

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
    $workExperience = $workExperience;
  }
</script>

<section>
  <h2>Work Experience</h2>
  {#each $workExperience as _, index}
    <WorkExperienceUnit data={propertyStore(workExperience, index)}
    ></WorkExperienceUnit>
  {/each}
  <button type="button" class="border" on:click={addWorkExperience}>Add</button>
</section>
