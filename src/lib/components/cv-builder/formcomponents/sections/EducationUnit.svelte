<script lang="ts">
  import { writable, type Writable } from "svelte/store";
  import { propertyStore } from "svelte-writable-derived";
  import {
    type EducationUnit,
    type BulletPoints as BP,
  } from "$lib/components/cv-builder/cv-builder-simple";
  import BulletPoints from "$lib/components/cv-builder/formcomponents/BulletPoints.svelte";
  import { selectedLanguageString as s } from "$lib/stores";

  export let data: Writable<EducationUnit>;

  function addBulletPoint() {
    $data.bulletPoints.push("");
    $data = $data;
  }
</script>

<div class="grid gap-2">
  <label class="block"
    >{$s.interactive.cvbuilder.education.institution}:
    <input
      class="w-full rounded-sm border"
      type="text"
      bind:value={$data.institution}
    />
  </label>
  <label class="block"
    >{$s.interactive.cvbuilder.education.title}:
    <input
      class="w-full rounded-sm border"
      type="text"
      bind:value={$data.degree}
    /></label
  >
  <label class="block"
    >{$s.interactive.cvbuilder.education.startDate}:
    <input
      class="w-full rounded-sm border"
      type="month"
      bind:value={$data.dateStart}
    /></label
  >
  <label class="block"
    >{$s.interactive.cvbuilder.education.endDate}:
    <input
      class="w-full rounded-sm border"
      type="month"
      bind:value={$data.dateEnd}
    /></label
  >
  <BulletPoints
    bullets={data ? propertyStore(data, "bulletPoints") : writable([])}
  ></BulletPoints>
</div>
