<script lang="ts">
  import { type Writable } from "svelte/store";

  export let label: string;
  export let min: number;
  export let max: number;
  export let value: Writable<number>;
  export let step: number;

  let decimals = Math.ceil(-Math.log10(step));
</script>

<label class="block">
  {`${label}: ${$value.toFixed(decimals)}`}
  <div>
    <span>{min.toFixed(decimals)}</span>
    <input type="range" {min} {max} {step} bind:value={$value} />
    <span>{max.toFixed(decimals)}</span>
  </div>
</label>
