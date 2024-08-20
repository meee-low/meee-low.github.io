<script lang="ts">
  import type { Writable } from "svelte/store";
  import { type EducationUnit as EducationUnitT } from "../../cv-builder-simple";
  import { propertyStore } from "svelte-writable-derived";
  import EducationUnit from "./EducationUnit.svelte";
  import { selectedLanguageString as s } from "$lib/stores";

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
    $education = $education; // just to ensure it triggers reactivity
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
  <h2 class="mb-2 inline text-lg font-bold">{$s.interactive.cvbuilder.education.sectionHeader}</h2>
 <button type="button" class="inline-block border py-1 px-2 rounded-md" on:click={addEducationExperience}
    >{$s.interactive.cvbuilder.buttons.addSubsection}</button
  >
  {#each $education as _, index}
    <div>
      <EducationUnit data={propertyStore(education, index)}></EducationUnit>
    </div>
  {/each}
</section>
