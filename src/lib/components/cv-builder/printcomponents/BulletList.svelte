<script lang="ts">
  export let bullets: string[];
  export let gridCols: number = 1;
</script>

{#if bullets && bullets.length > 0}
  <ul class="list-disc pl-8 grid print:leading-snug tracking-tight" style="grid-template-columns: repeat({gridCols}, minmax(0, 1fr));">
    {#each bullets as bullet}
      <li class="">{bullet}</li>
    {/each}
  </ul>
{/if}

<style>
  li::marker {
    margin-right: 0;
  }
</style>
