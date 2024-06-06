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

  function removeUnit(index: number) {
    education.update((arr) => {
      arr[index].bulletPoints = [];
      arr.splice(index, 1);
      return arr;
    });
  }
</script>

<section class="mb-4">
  <h2 class="mb-2 inline text-lg font-bold">Education</h2>
  <button type="button" class="inline-block border" on:click={addEducationExperience}
    >Add</button
  >
  {#each $education as _, index}
    <div>
      <EducationUnit data={propertyStore(education, index)}></EducationUnit>
    </div>
  {/each}
</section>
