 
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
  <h2>Projects</h2>
  {#each $projects as proj, index}
    <input class="border block" type="text" bind:value={proj.title}>
    <input class="border block" type="text" bind:value={proj.description}>
    <input class="border block" type="text" bind:value={proj.link}>
    <BulletPoints bullets={propertyStore(projects, [index, "bulletPoints"])}></BulletPoints>
    {/each	}
    <button class="border block" on:click={addProject}>Add Project</button>
</section>
