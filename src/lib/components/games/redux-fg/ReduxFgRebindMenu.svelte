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
    <label>
      P1 Attack:
      <input type="text" bind:value={$inputs.Player1Atk} class="border" />
    </label>

    <label>
      P1 Defend:
      <input type="text" bind:value={$inputs.Player1Def} class="border" />
    </label>

    <label>
      P2 Attack:
      <input
        type="text"
        bind:value={$inputs.Player2Atk}
        class="min-w-0 border"
      />
    </label>

    <label>
      P2 Defend:
      <input type="text" bind:value={$inputs.Player2Def} class="border" />
    </label>
  </form>
{/if}
