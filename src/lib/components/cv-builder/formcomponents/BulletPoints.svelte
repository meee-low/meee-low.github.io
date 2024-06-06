<script lang="ts">
  import { type Writable } from "svelte/store";
  import { type BulletPoints } from "$lib/components/cv-builder/cv-builder-simple";

  export let bullets: Writable<BulletPoints>;

  function moreBullets() {
    $bullets.push("");
    $bullets = $bullets;
  }

  function removeBullet(index: number) {
    bullets.update((arr) => {
      arr.splice(index, 1);
      return arr;
    });
  }
</script>

<div class="ml-2">
  <h4>Bullet Points:</h4>
  {#each $bullets as bullet, index}
    <input
      class="ml-2 block border"
      type="text"
      bind:value={bullet}
      spellcheck="true"
    />
    <button on:click={() => removeBullet(index)}
      ><i class="fa-solid fa-bucket"></i></button
    >
  {/each}
  <button type="button" class="ml-2 block border" on:click={moreBullets}
    >Add more bullet points</button
  >
</div>
