<script lang="ts">
  import { derived, type Writable } from "svelte/store";
  import writableDerived, { propertyStore } from "svelte-writable-derived";
  import {
    type WorkExperienceUnit,
    type BulletPoints as BP,
  } from "$lib/components/cv-builder/cv-builder-simple";
  import BulletPoints from "$lib/components/cv-builder/formcomponents/BulletPoints.svelte";
  import { selectedLanguageString as s } from "$lib/stores";

  export let data: Writable<WorkExperienceUnit>;

  function addBulletPoint() {
    $data.bulletPoints.push("");
    $data = $data;
  }
</script>

<div class="grid gap-2">
  <label class="block">
    {$s.interactive.cvbuilder.workExperience.position}:
    <input
      class="w-full rounded-sm border"
      type="text"
      bind:value={$data.position}
    />
  </label>
  <label class="block">
    {$s.interactive.cvbuilder.workExperience.employer}:
    <input
      class="w-full rounded-sm border"
      type="text"
      bind:value={$data.employer}
    />
  </label>
  <label class="block">
    {$s.interactive.cvbuilder.workExperience.start}:
    <input
      class="w-full rounded-sm border"
      placeholder="2023-10"
      type="month"
      bind:value={$data.dateStart}
    />
  </label>
  <label class="block">
    {$s.interactive.cvbuilder.workExperience.finish}:
    <input
      class="w-full rounded-sm border"
      placeholder="2023-10"
      type="month"
      bind:value={$data.dateEnd}
    />
  </label>
  <BulletPoints bullets={propertyStore(data, "bulletPoints")} multiline
  ></BulletPoints>
</div>
