
<script lang="ts">
  import type { Writable } from "svelte/store";
  import { type EducationUnit as EducationUnitT } from "../../cv-builder-simple";
  import { propertyStore } from "svelte-writable-derived";
  import EducationUnit from "./EducationUnit.svelte";

  export let education: Writable<EducationUnitT[]>;

  function addEducationExperience() {
    const emptyEducationUnit: EducationUnitT = {
      institution: "",
      degree: "",
      dateStart: "",
      dateEnd: "",
      bulletPoints: [],
    };
    $education.push(emptyEducationUnit);
    $education = $education;
  }
</script>

<section class="mb-4">
  <h2 class="font-bold text-lg mb-2 inline">Education</h2>
  <button class="border inline-block" on:click={addEducationExperience}>Add</button>
  {#each $education as _, index}
    <EducationUnit data={propertyStore(education, index)}
    ></EducationUnit>
  {/each}
</section>
