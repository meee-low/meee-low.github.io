<script lang="ts">
  export let link: string;
  // TODO: Use this
</script>

<div class="relative inline-block">
  <slot></slot>
  <a href={link} class="absolute inset-0"> </a>
</div>
