<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import { type ProjectInfo } from "$lib/interfaces";

  const projects: ProjectInfo[] = [
    {
      name: "Project 1",
      width: 2,
      height: 2,
      description: "My first project.",
    },
    {
      name: "Project 2",
      width: 2,
      height: 2,
      description: "My second project.",
    },
  ];
</script>

{#each projects as projectInfo}
  <ProjectCard {projectInfo}></ProjectCard>
{/each}
