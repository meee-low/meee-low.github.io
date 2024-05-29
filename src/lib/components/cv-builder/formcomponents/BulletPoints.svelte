<script lang="ts">
  import { type Writable } from "svelte/store";
  import {type BulletPoints } from "$lib/components/cv-builder/cv-builder-simple";

  export let bullets: Writable<BulletPoints>;

  function moreBullets() {
    $bullets.push("");
    $bullets = $bullets;
  }
</script>

<h4>Bullet Points:</h4>
{#each $bullets as bullet, index}
  <input class="border block" type="text" bind:value={bullet} />
{/each}
<button class="border block" on:click={moreBullets}>Add more bullet points</button>