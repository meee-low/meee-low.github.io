<script lang="ts">
  import ReduxFgCircle from "$lib/components/games/redux-fg/ReduxFGCircle.svelte";
  import ReduxFghud from "$lib/components/games/redux-fg/ReduxFGHUD.svelte";
  import {
    gameState,
    handleKeyDown,
    handleKeyUp,
    update,
  } from "$lib/components/games/redux-fg/game";

  setInterval(() => {
    $gameState = update($gameState);
  }, 1000 / 60);
</script>

<div role="application" class="container mx-auto border">
  <div class="flex items-center">
    <ReduxFghud gameState={$gameState}></ReduxFghud>
  </div>
  <div class="grid grid-cols-2">
    <ReduxFgCircle playerState={$gameState.playerOneState}></ReduxFgCircle>
    <ReduxFgCircle playerState={$gameState.playerTwoState}></ReduxFgCircle>
  </div>
</div>

<div>
  <h2 class="max-w-[100vw]">Debug:</h2>
  <p>
    {JSON.stringify($gameState)}
  </p>
</div>

<svelte:window
  on:keydown={(e) => handleKeyDown($gameState, e)}
  on:keyup={(e) => handleKeyUp($gameState, e)}
/>
