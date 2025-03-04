<script lang="ts">
  export let bullets: string[];
  export let gridCols: number = 1;
  export let flex: boolean = false;

  import { formatBasicMarkdown } from "$lib/markdownParsing";
</script>

{#if bullets && bullets.length > 0}
  <ul
    class="{flex
      ? 'flex flex-wrap gap-4'
      : 'grid'} gridcols list-disc justify-between pl-8 tracking-tight print:leading-snug"
    style="{!flex && gridCols >= 1
      ? `grid-template-columns: repeat(${gridCols}, minmax(0, 1fr))`
      : ''};"
  >
    {#each bullets as bullet}
      {#if bullet}
        <li class="">{@html formatBasicMarkdown(bullet)}</li>
      {/if}
    {/each}
  </ul>
{/if}

<style>
  li::marker {
    margin-right: 0;
  }
</style>
