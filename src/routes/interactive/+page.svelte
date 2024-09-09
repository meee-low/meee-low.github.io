<script lang="ts">
  import DynamicPageTitle from "$lib/components/DynamicPageTitle.svelte";

  interface InteractiveProject {
    title: string;
    imgPath: string;
    description: string;
    href: string;
  }

  const interactiveProjects: InteractiveProject[] = [
    {
      title: "Resume Builder",
      imgPath: "",
      description:
        "Input your information and get a resume automatically formated into my layout.",
      href: "interactive/cv-builder/test",
    },
    {
      title: "Redux Fighting Game",
      imgPath: "",
      description:
        "My attempt to make the world's simplest fighting game. Two circles, two buttons, all just pure basic HTML (not even HTML5 canvas).",
      href: "interactive/redux-fg",
    },
    {
      title: "[WIP] Bracketeering",
      imgPath: "",
      description:
        "Input a list of things you want to rank, and then answer which of each pair you like more to get a ranked list of them.",
      href: "interactive/bracketeering",
    },
    {
      title: "[Coming soon] Boids",
      imgPath: "",
      description:
        "A boids simulation (emergent flock-like behavior from simple rules). Not done.",
      href: "interactive/boids",
    },
    {
      title: "[Coming soon] Take Combiner",
      imgPath: "",
      description:
        "Record multiple takes of different sections of a script. Pick your favorite takes and export the entire file.",
      href: "interactive/audio-splicer",
    },
  ];
</script>

<div class="px-[5vw] py-8">
  <ul class="grid gap-4 md:grid-cols-2">
    {#each interactiveProjects as proj}
      <li class="rounded-lg border border-slate-700 px-4 py-3">
        <h3 class="mb-1 text-xl font-bold">
          {#if proj.href && proj.href.length > 0}
            <a class="hover:underline" href={proj.href}>{proj.title}</a>
          {:else}
            {proj.title}
          {/if}
        </h3>
        <p class="mb-1 ml-4">{proj.description}</p>
      </li>
    {/each}
  </ul>
</div>

<DynamicPageTitle></DynamicPageTitle>
