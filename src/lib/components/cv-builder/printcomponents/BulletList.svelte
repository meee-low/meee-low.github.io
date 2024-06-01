<script lang="ts">
  export let bullets: string[];
  export let gridCols: number = 1;

  import {formatBasicMarkdown} from "$lib/markdownParsing"
</script>

{#if bullets && bullets.length > 0}
  <ul
    class="grid list-disc pl-8 tracking-tight print:leading-snug"
    style="grid-template-columns: repeat({gridCols}, minmax(0, 1fr));"
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
