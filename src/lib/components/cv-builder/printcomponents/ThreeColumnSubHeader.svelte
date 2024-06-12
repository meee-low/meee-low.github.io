<script lang="ts">
  export let left: string;
  export let center: string;
  export let right: string;
</script>

<div
  class="mx-2 grid gap-2 overflow-visible text-nowrap font-semibold"
  style="grid-template-columns: 1fr auto 1fr"
>
  <h3 class="text-left">{left}</h3>
  <h3 class="text-center">{center}</h3>
  <h3 class="text-right">{right}</h3>
</div>
