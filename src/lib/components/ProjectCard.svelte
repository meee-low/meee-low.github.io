<script lang="ts">
  import Modal from "./Modal.svelte";
  import { type ProjectInfo } from "$lib/interfaces";
  import { toolToImgSrc } from "$lib/utils";
  import { selectedLanguageString as s } from "$lib/stores";

  export let projectInfo: ProjectInfo;

  // This is to make Svelte believe it's an array and let me {#each} over it when server-side rendering.
  let languagesAndFrameworks: string[] = [];
  if (projectInfo && projectInfo.languagesAndFrameworks) {
    languagesAndFrameworks = projectInfo.languagesAndFrameworks;
  }

  let showModal = false;
</script>

<button
  class="grid h-full min-h-[230px] w-full select-text grid-cols-5 items-stretch gap-3 overflow-clip rounded-lg border shadow-lg hover:shadow-xl xl:grid-cols-2"
  on:click={() => {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      return;
    }
    showModal = true;
  }}
  aria-haspopup="dialog"
  tabindex="0"
>
  <img
    src={projectInfo.imagePath}
    alt="Thumbnail for '{projectInfo.title}'"
    class="col-span-2 m-auto xl:col-span-1"
  />
  <div class="relative col-span-3 p-4 text-left xl:col-span-1">
    <h3 class="mb-4 cursor-auto text-lg font-bold">{projectInfo.title}</h3>
    <p class="font-sans mb-8 cursor-auto">{projectInfo.description}</p>
    <div class="flex flex-wrap justify-around gap-6">
      {#each languagesAndFrameworks as tool}
        <div class="max-h-12 max-w-12">
          <img
            class="m-auto max-h-full max-w-full"
            src={toolToImgSrc(tool)}
            alt={tool}
            title={tool}
          />
        </div>
      {/each}
    </div>
  </div>
</button>

<Modal bind:showModal>
  <div
    class="max-h-[90vh] max-w-[80vw] overflow-auto px-[5%] py-6 lg:min-w-[30vw] lg:max-w-[40vw]"
  >
    <img src={projectInfo.imagePath} alt="" class="mx-auto mb-4 max-h-[40vh]" />
    <h2 class="mb-2 text-center text-xl font-bold">
      {projectInfo.title}
    </h2>
    <p class="mb-6 font-sans">{projectInfo.description}</p>
    {#if languagesAndFrameworks.length > 0}
      <ul class="mb-6 md:grid md:grid-cols-2 md:place-content-around">
        {#each languagesAndFrameworks as tool}
          <li class="mb-2 flex align-middle">
            <div class="mr-2 max-h-8 max-w-8">
              <img
                class="m-auto max-h-full max-w-full"
                src={toolToImgSrc(tool)}
                alt=""
              />
            </div>
            {tool}
          </li>
        {/each}
      </ul>
    {/if}
    {#if projectInfo.projectUrl}
      <a
        class="text-blue-600 visited:text-purple-600 hover:text-blue-800 hover:underline"
        href={projectInfo.projectUrl}>{$s.portfolio.portfoliocard.sourcecode}</a
      >
    {/if}
  </div>
</Modal>
