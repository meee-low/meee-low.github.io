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
    <div class="flex gap-2 mb-2">
      <textarea
        cols="60"
        rows="4"
        class="ml-2 block border"
        bind:value={bullet}
        spellcheck="true"
      />
      <button type="button" on:click={() => removeBullet(index)}
        ><i class="text-xl fa-solid fa-trash"><span class="sr-only">Delete</span></i></button
      >
    </div>
  {/each}
  <button type="button" class="ml-2 p-1.5 rounded-md block border" on:click={moreBullets}
    >Add more bullet points</button
  >
</div>
