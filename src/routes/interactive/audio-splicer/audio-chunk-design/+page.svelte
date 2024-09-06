<script lang="ts">
  let chunkTitle: string;
  let chunkLengthInSeconds: number;
  let selected: boolean;

  chunkTitle = "alksjdflkj";
  chunkLengthInSeconds = 132;

</script>

<div class="border w-fit p-2 relative">
  <div class="flex gap-12">
    <input bind:checked={selected} type="checkbox"/>
    <h3>{chunkTitle}</h3>
    <button>Del</button>
  </div>
  <div>
    
  </div>
  <div>
    <span>{`${Math.round(chunkLengthInSeconds/60)}:${chunkLengthInSeconds%60}`}</span>
  </div>
</div>