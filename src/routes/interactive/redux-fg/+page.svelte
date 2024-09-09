<script lang="ts">
  import ReduxFgAnnouncer from "./components/ReduxFgAnnouncer.svelte";
  import ReduxFgCircle from "./components/ReduxFGCircle.svelte";
  import ReduxFghud from "./components/ReduxFGHUD.svelte";
  import ReduxFgRebindMenu from "./components/ReduxFgRebindMenu.svelte";
  import {
    gameState,
    handleKeyDown,
    handleKeyUp,
    update,
    resetRound,
  } from "./components/game";
  import { onMount, onDestroy } from "svelte";
  import { page } from "$app/stores";

  let gameIsFocused = true;
  let debugMode = false;
  let rebindMode = false;

  setInterval(() => {
    $gameState = update($gameState);
  }, 1000 / 60);

  onMount(() => {
    // $gameState = resetRound($gameState);
    $gameState.globals.paused = true;
    debugMode = $page.url.searchParams.has("debug");
    rebindMode = $page.url.searchParams.has("rebind");
  });

  onDestroy(() => {
    $gameState = resetRound($gameState);
  });
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
  role="application"
  class="container mx-auto select-none border"
  tabindex="0"
  on:focus={(_) => (gameIsFocused = true)}
  on:keydown={(e) => {
    if (gameIsFocused) {
      handleKeyDown($gameState, e);
    }
  }}
  on:keyup={(e) => {
    if (gameIsFocused) {
      handleKeyUp($gameState, e);
    }
  }}
>
  <div class="flex items-center">
    <ReduxFghud gameState={$gameState}></ReduxFghud>
  </div>
  <div class="relative m-4">
    <div class="grid grid-cols-2">
      <ReduxFgCircle playerState={$gameState.playerOneState}></ReduxFgCircle>
      <ReduxFgCircle playerState={$gameState.playerTwoState}></ReduxFgCircle>
    </div>
    <ReduxFgAnnouncer></ReduxFgAnnouncer>
  </div>
</div>

{#if debugMode}
  <div id="debug" class="mx-[5vw]">
    <h2 class="max-w-[100vw]">Debug:</h2>
    <div class="grid auto-cols-fr grid-flow-col">
      {#each Object.entries($gameState) as [key, values]}
        <div>
          <h3>{key}:</h3>
          <p class="whitespace-pre-wrap">
            {JSON.stringify(values, null, 2)}
          </p>
        </div>
      {/each}
    </div>
  </div>
{/if}

{#if rebindMode}
  <ReduxFgRebindMenu></ReduxFgRebindMenu>
{:else}
  <div class="px-[5vw]">
    <h2>Instructions:</h2>
    <ul>
      <li>
        A, RightArrow: Block (good timing = parry = point for the defender)
      </li>
      <li>Tap D or LeftArrow: Feint</li>
      <li>Hold D or LeftArrow: Attack</li>
    </ul>
  </div>
{/if}

<svelte:head>
  <title>Redux Fighting Game</title>
  <meta name="description" content="The world's simplest fighting game." />
</svelte:head>
