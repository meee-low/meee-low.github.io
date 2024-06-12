<script lang="ts">
  import type { Writable } from "svelte/store";
  import { type Projects } from "../../cv-builder-simple";
  import BulletPoints from "../BulletPoints.svelte";
  import { propertyStore } from "svelte-writable-derived";

  export let projects: Writable<Projects>;

  function addProject() {
    $projects.push({
      title: "",
      description: "",
      link: "",
      bulletPoints: [],
    });
    $projects = $projects;
  }
</script>

<section>
  <h2 class="inline text-lg font-bold">Projects</h2>
  <button
    type="button"
    class="inline-block rounded-md border px-2 py-1"
    on:click={addProject}>Add</button
  >
  {#each $projects as proj, index}
    <label class="block">
      Título:
      <input class="rounded-sm w-full border" type="text" bind:value={proj.title} />
    </label>
    <label class="block">
      Descrição:
      <input
        class="rounded-sm w-full border"
        type="text"
        bind:value={proj.description}
      />
    </label>
    <label class="block">
      Link:
      <input class="rounded-sm w-full border" type="text" bind:value={proj.link} />
    </label>
    <BulletPoints bullets={propertyStore(projects, [index, "bulletPoints"])}
    ></BulletPoints>
  {/each}
</section>
