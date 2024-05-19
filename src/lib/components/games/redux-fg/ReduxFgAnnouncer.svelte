<script lang="ts">
  import {
    gameState,
    type GameState,
  } from "$lib/components/games/redux-fg/game";
  import { fade } from "svelte/transition";

  function announcementFromGameState(gameState: GameState): string | null {
    if (gameState.globals.paused) {
        return "(P)aused."
    }
    if (gameState.globals.frozenFramesLeft > 0) {
      if (gameState.globals.frozenReason === "roundReset") {
        if (gameState.globals.frozenFramesLeft <= 1) {
          return "Go!";
        }
        return (
          "" + Math.max(1, Math.round(gameState.globals.frozenFramesLeft / 60))
        );
      }
    }
    return null;
  }

  $: announcements = announcementFromGameState($gameState);
</script>

<div class="absolute inset-0 flex h-full w-full items-center justify-center">
  {#if announcements}
    <p class="m-auto text-4xl">{announcements}</p>
  {/if}
</div>
