<script lang="ts">
  import TagsFilters from "$lib/components/TagsFilters.svelte";
  import { projectsFilters, filtering, activeFilters } from "$lib/stores";
  import { projects } from "$lib/projects";
  import ProjectCard from "./ProjectCard.svelte";

  import { haveCommonElements, booleanToInt } from "$lib/utils";
  import { flip } from "svelte/animate";
  import type { ProjectInfo } from "$lib/interfaces";

  let myProjects = [...projects];

  function sortProjects() {
    let maxOrderPriorityThatMatches = (a: ProjectInfo) =>
      Math.max(
        ...$projectsFilters
          .filter((p) => a.filterableTags.includes(p.label) && p.filterEnabled)
          .map((p) => p.orderClicked),
        0,
      );

    let weighSort = (a: ProjectInfo) =>
      a.id -
      booleanToInt(haveCommonElements(a.filterableTags, $activeFilters)) *
        10000 -
      maxOrderPriorityThatMatches(a) * 100;

    myProjects = myProjects.sort((a, b) => {
      return weighSort(a) - weighSort(b);
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
        class="rounded-lg border-2 {$filtering &&
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
