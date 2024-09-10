<script lang="ts">
  import { type Writable } from "svelte/store";
  import { type BulletPoints } from "$lib/components/cv-builder/cv-builder-simple";
  import { selectedLanguageString as s } from "$lib/stores";

  export let bullets: Writable<BulletPoints>;
  export let multiline: boolean = false;

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
  <h4>{$s.interactive.cvbuilder.litBulletPoints}:</h4>
  {#each $bullets as bullet, index}
    <div class="mb-2 flex gap-2">
      {#if multiline}
        <textarea
          cols="60"
          rows="2"
          class="ml-2 block border"
          bind:value={bullet}
          spellcheck="true"
        />
      {:else}
        <input
          type="text"
          class="ml-2 block w-full border"
          bind:value={bullet}
          spellcheck="true"
        />
      {/if}
      <button type="button" on:click={() => removeBullet(index)}
        ><i class="fa-solid fa-trash text-xl"
          ><span class="sr-only">Delete</span></i
        ></button
      >
    </div>
  {/each}
  <button
    type="button"
    class="ml-2 block rounded-md border p-1.5"
    on:click={moreBullets}
    >{$s.interactive.cvbuilder.buttons.addBulletPoints}</button
  >
</div>
