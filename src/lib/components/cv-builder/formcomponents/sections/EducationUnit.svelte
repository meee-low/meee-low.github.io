<script lang="ts">
  import {type Writable } from "svelte/store";
  import { propertyStore } from "svelte-writable-derived";
  import {
    type EducationUnit,
    type BulletPoints as BP,
  } from "$lib/components/cv-builder/cv-builder-simple";
  import BulletPoints from "$lib/components/cv-builder/formcomponents/BulletPoints.svelte";

  export let data: Writable<EducationUnit>;

  function addBulletPoint() {
    $data.bulletPoints.push("");
    $data = $data;
  }
</script>

<input type="text" bind:value={$data.institution} />
<input type="text" bind:value={$data.degree} />
<input type="text" bind:value={$data.dateStart} />
<input type="text" bind:value={$data.dateEnd} />
<BulletPoints bullets={propertyStore(data, "bulletPoints")}></BulletPoints>
<button on:click={addBulletPoint}>Add Bullet Point</button>

<style>
  input {
    @apply block border;
  }
</style>
