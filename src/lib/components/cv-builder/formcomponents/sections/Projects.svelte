 
<script lang="ts">
  import type { Writable } from "svelte/store";
  import {type Projects} from "../../cv-builder-simple";
    import BulletPoints from "../BulletPoints.svelte";
    import { propertyStore } from "svelte-writable-derived";

  export let projects: Writable<Projects>;

  function addProject() {
    $projects.push({
        title: "",
        description: "",
        link: "",
        bulletPoints: []
    });
    $projects = $projects
  }
</script>

<section>
  <h2 class="text-lg font-bold inline">Projects</h2>
  <button type="button" class="border inline-block" on:click={addProject}>Add</button>
  {#each $projects as proj, index}
    <label class="block"> Título:
      <input class="border inline-block" type="text" bind:value={proj.title}>
    </label>
    <label class="block"> Descrição:
      <input class="border inline-block" type="text" bind:value={proj.description}>
    </label>
    <label class="block"> Link:
      <input class="border inline-block" type="text" bind:value={proj.link}>
    </label>
      <BulletPoints bullets={propertyStore(projects, [index, "bulletPoints"])}></BulletPoints>
  {/each	}
</section>
