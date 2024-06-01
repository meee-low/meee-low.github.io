<script lang="ts">
  import { type Writable } from "svelte/store";
  import {type BulletPoints } from "$lib/components/cv-builder/cv-builder-simple";

  export let bullets: Writable<BulletPoints>;

  function moreBullets() {
    $bullets.push("");
    $bullets = $bullets;
  }
</script>

<div class="ml-2">
<h4>Bullet Points:</h4>
{#each $bullets as bullet, index}
  <input class="border block ml-2" type="text" bind:value={bullet} />
{/each}
<button class="border block ml-2" on:click={moreBullets}>Add more bullet points</button>
</div>