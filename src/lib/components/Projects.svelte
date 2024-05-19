<script lang="ts">
  import TagsFilters from "$lib/components/TagsFilters.svelte";
  import { projectsFilters, filtering, activeFilters } from "$lib/stores";
  import { projects } from "$lib/projects";
  import ProjectCard from "./ProjectCard.svelte";

  import { haveCommonElements, booleanToInt } from "$lib/utils";
  import { flip } from "svelte/animate";

  let myProjects = [...projects];

  function sortProjects() {
    myProjects = myProjects.sort((a, b) => {
      const a_val =
        a.id -
        booleanToInt(haveCommonElements(a.filterableTags, $activeFilters)) *
          1000;
      const b_val =
        b.id -
        booleanToInt(haveCommonElements(b.filterableTags, $activeFilters)) *
          1000;
      return a_val - b_val;
    });
  }

  const unsubscribe = projectsFilters.subscribe(sortProjects);
</script>

<div class="mx-auto p-4 px-[5vw]">
  <div class="sticky">
    <TagsFilters></TagsFilters>
  </div>
  <div class="3xl:grid-cols-3 grid grid-cols-1 gap-4 lg:grid-cols-2">
    {#each myProjects as projectInfo (projectInfo.title)}
      <div
        animate:flip={{ duration: 300 }}
        class="border-2 {$filtering &&
        haveCommonElements(projectInfo.filterableTags, $activeFilters)
          ? 'border-teal-500'
          : 'border-transparent '}
          "
      >
        <ProjectCard {projectInfo}></ProjectCard>
      </div>
    {/each}
  </div>
</div>
