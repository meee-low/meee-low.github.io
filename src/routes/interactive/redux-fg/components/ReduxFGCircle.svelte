<script lang="ts">
  import { type PlayerState } from "./game";

  export let playerState: PlayerState;

  function stateToColor(state: string): string {
    if (state === "blocking" || state === "blocking-start") {
      return "bg-red-500";
    } else if (state === "attacking") {
      return "bg-sky-500";
    }
    return "bg-yellow-400";
  }

  function stateToIcon(playerState: PlayerState): string {
    if (playerState.parryFrames > 0) {
      return "fa-solid fa-exclamation";
    } else if (playerState.status == "blocking") {
      if (playerState.blockStamina > 0) {
        return "fa-solid fa-shield";
      } else {
        // Broken shield
        return "fa-solid fa-shield-halved";
      }
    } else if (playerState.status == "attacking") {
      return "fa-solid fa-bolt";
    }
    return "invisible";
  }
</script>

<div
  class="{stateToColor(
    playerState.status,
  )} relative m-auto h-[200px] w-[200px] overflow-clip rounded-full"
>
  <div
    class="{playerState.status === 'blocking'
      ? ''
      : 'invisible'} absolute bottom-0 w-full bg-red-800"
    style="height: {playerState.blockStamina}%"
  ></div>
  <div
    class="{playerState.status === 'attacking'
      ? ''
      : 'invisible'} absolute bottom-0 w-full bg-sky-800"
    style="height: {playerState.attackCharge}%"
  ></div>
  <i
    class="{stateToIcon(playerState)} absolute left-1/2 top-1/2
    -translate-x-1/2 -translate-y-1/2 transform text-6xl text-gray-300
    "
  ></i>
</div>
