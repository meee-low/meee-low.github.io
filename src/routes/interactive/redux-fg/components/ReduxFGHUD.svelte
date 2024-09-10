<script lang="ts">
  import { type GameState } from "./game";

  let score = 0;

  export let gameState: GameState;
</script>

<div class="min-h-20 w-full bg-gray-500 p-2">
  <div id="bar" class="grid w-full grid-cols-3">
    <p class="text-center">
      W:{gameState.playerOneState.score}
    </p>
    <p class="text-center">
      {Math.round(gameState.globals.roundFrameCount / 60)}
    </p>
    <p class="text-center">
      W:{gameState.playerTwoState.score}
    </p>
  </div>
  <div class="relative mx-8">
    <div
      class="absolute h-10 w-6 bg-blue-500"
      style="left: calc({(score / 6) * 100}% - 12px)"
    ></div>
    <div
      class="absolute h-10 w-6 bg-orange-500"
      style="right: calc({(score / 6) * 100}% - 12px)"
    ></div>
  </div>
</div>
