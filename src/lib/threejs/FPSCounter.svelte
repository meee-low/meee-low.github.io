<script lang="ts">
  import { NumericRingBuffer } from "$lib/utils/ring_buffer";
  let nrb = new NumericRingBuffer(10);

  export function pushDeltatime(deltatime: number) {
    nrb.push(deltatime);
    nrb = nrb;
  }
</script>

<div>{Math.round(1 / (nrb.mean() ?? -1))}</div>
