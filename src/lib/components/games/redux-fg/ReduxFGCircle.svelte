<script lang="ts">
  import { type PlayerState } from "$lib/components/games/redux-fg/game";

  export let playerState: PlayerState;

  function stateToColor(state: string): string {
    if (state === "blocking" || state === "blocking-start") {
      return "bg-red-500";
    } else if (state === "attacking") {
      return "bg-sky-500";
    }
    return "bg-yellow-400";
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
</div>
