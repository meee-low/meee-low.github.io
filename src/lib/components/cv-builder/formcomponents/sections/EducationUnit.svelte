<script lang="ts">
  import { writable, type Writable } from "svelte/store";
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

<div class="grid gap-2">
<label class="block"
  >Instituição: <input
    class="w-full rounded-sm border"
    type="text"
    bind:value={$data.institution}
  />
</label>
<label class="block"
  >Título: <input
    class="w-full rounded-sm border"
    type="text"
    bind:value={$data.degree}
  /></label
>
<label class="block"
  >Data de começo (AAAA-MM): <input
    class="w-full rounded-sm border"
    type="month"
    bind:value={$data.dateStart}
  /></label
>
<label class="block"
  >Data de conclusão (AAAA-MM): <input
    class="w-full rounded-sm border"
    type="month"
    bind:value={$data.dateEnd}
  /></label
>
<BulletPoints
  bullets={data ? propertyStore(data, "bulletPoints") : writable([])}
></BulletPoints>
</div>
