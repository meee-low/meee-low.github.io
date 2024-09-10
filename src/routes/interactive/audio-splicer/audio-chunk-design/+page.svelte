<script lang="ts">
  let chunkTitle: string;
  let chunkLengthInSeconds: number;
  let selected: boolean;

  chunkTitle = "alksjdflkj";
  chunkLengthInSeconds = 132;
</script>

<div class="relative w-fit border p-2">
  <div class="flex gap-12">
    <input bind:checked={selected} type="checkbox" />
    <h3>{chunkTitle}</h3>
    <button>Del</button>
  </div>
  <div></div>
  <div>
    <span
      >{`${Math.round(chunkLengthInSeconds / 60)}:${chunkLengthInSeconds % 60}`}</span
    >
  </div>
</div>
