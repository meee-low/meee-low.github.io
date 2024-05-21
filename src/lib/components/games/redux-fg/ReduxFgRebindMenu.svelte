<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { inputs } from "$lib/components/games/redux-fg/game";

  // Reactive statement to update the form based on route parameters
  onMount(() => {
    console.log($page.url.searchParams);
  });

  // Function to handle form submission
  function handleSubmit() {
    // Perform any additional actions on form submission
  }
</script>

{#if $page.url.searchParams.has("rebind")}
  <form on:submit|preventDefault={handleSubmit} class="flex flex-col">
    {#each Object.entries($inputs) as [inp, key]}
      <label>
        {inp}:
        <input
          type="text"
          on:input|preventDefault={(_) => {}}
          on:keydown|preventDefault={(e) => {
            // @ts-ignore: It's ok to ignore this because the index comes from Object.entries.
            $inputs[inp] = e.key;
          }}
          bind:value={key}
          class="border"
        />
      </label>
    {/each}
  </form>
{/if}
