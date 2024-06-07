<script lang="ts">
  export let left: string;
  export let center: string;
  export let right: string;
</script>


<div class="mx-2 grid grid-cols-3 text-nowrap font-semibold font- overflow-visible">
  <h3 class="text-left">{left}</h3>
  <h3 class="text-center">{center}</h3>
  <h3 class="text-right">{right}</h3>
</div>