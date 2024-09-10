<script lang="ts">
  import { flip } from "svelte/animate";
  import { projectsFilters, filtering } from "$lib/stores";

  function handleFilterToggle(index: number) {
    // Toggle the switch
    $projectsFilters[index].filterEnabled =
      !$projectsFilters[index].filterEnabled;

    // If toggling on, increment it in the order clicked
    if ($projectsFilters[index].filterEnabled) {
      let curIndex = Math.max(...$projectsFilters.map((p) => p.orderClicked));
      $projectsFilters[index].orderClicked = curIndex + 1;
    }

    $projectsFilters = $projectsFilters.sort((a, b) => {
      if (!a.filterEnabled && !b.filterEnabled) {
        return a.baseOrder >= b.baseOrder ? 0 : -1;
      }
      return a.filterEnabled === b.filterEnabled ? 0 : a.filterEnabled ? -1 : 1;
    });
  }
</script>

<div class="mb-4 mt-2 flex gap-2 overflow-x-auto">
  {#each $projectsFilters as tag, index (tag.label)}
    <button
      class="{!$filtering || tag.filterEnabled
        ? 'border-gray-700 bg-gray-100 text-black'
        : 'border-gray-400 bg-gray-100 text-gray-400'}
        rounded-full border px-4 py-2 hover:bg-gray-300"
      aria-pressed={tag.filterEnabled}
      on:mousedown={() => handleFilterToggle(index)}
      animate:flip={{
        delay: 0,
        duration: (d) => Math.min(Math.sqrt(d) * 40, 400),
        // easing: expoOut,
      }}
    >
      {tag.label}
    </button>
  {/each}
</div>
