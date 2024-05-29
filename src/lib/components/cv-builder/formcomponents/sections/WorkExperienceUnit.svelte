<script lang="ts">
  import { derived, type Writable } from "svelte/store";
  import writableDerived, { propertyStore } from "svelte-writable-derived";
  import {
    type WorkExperienceUnit,
    type BulletPoints as BP,
  } from "$lib/components/cv-builder/cv-builder-simple";
  import BulletPoints from "$lib/components/cv-builder/formcomponents/BulletPoints.svelte";
  import { onMount } from "svelte";

  export let data: Writable<WorkExperienceUnit>;

  function addBulletPoint() {
    $data.bulletPoints.push("");
    $data = $data;
  }
</script>

<input class="border block" type="text" bind:value={$data.employer} />
<input class="border block" type="text" bind:value={$data.position} />
<input class="border block" type="text" bind:value={$data.dateStart} />
<input class="border block" type="text" bind:value={$data.dateEnd} />
<BulletPoints bullets={propertyStore(data, "bulletPoints")}></BulletPoints>
