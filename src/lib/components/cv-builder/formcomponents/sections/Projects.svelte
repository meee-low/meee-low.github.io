<script lang="ts">
  import type { Writable } from "svelte/store";
  import { type Projects } from "../../cv-builder-simple";
  import BulletPoints from "../BulletPoints.svelte";
  import { propertyStore } from "svelte-writable-derived";
  import { selectedLanguageString as s } from "$lib/stores";

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
  <h2 class="inline text-lg font-bold">{$s.interactive.cvbuilder.projects.sectionHeader}</h2>
  <button
    type="button"
    class="inline-block rounded-md border px-2 py-1"
    on:click={addProject}>{$s.interactive.cvbuilder.buttons.addSubsection}</button
  >
  {#each $projects as proj, index}
    <label class="block">
      {$s.interactive.cvbuilder.projects.projectTitle}:
      <input class="rounded-sm w-full border" type="text" bind:value={proj.title} />
    </label>
    <label class="block">
      {$s.interactive.cvbuilder.projects.description}:
      <input
        class="rounded-sm w-full border"
        type="text"
        bind:value={proj.description}
      />
    </label>
    <label class="block">
      {$s.interactive.cvbuilder.projects.linkToProject}:
      <input class="rounded-sm w-full border" type="text" bind:value={proj.link} />
    </label>
    <BulletPoints bullets={propertyStore(projects, [index, "bulletPoints"])} multiline
    ></BulletPoints>
  {/each}
</section>
