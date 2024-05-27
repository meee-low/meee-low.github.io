<script lang="ts">
  import {userInfo} from "$lib/components/cv-builder/cv-builder2";

  export let label: string;
  export let placeholder = "";
  export let binding: string;
</script>

<label>
  {label}
  <input bind:value={binding} {placeholder} class="rounded-sm border" />
</label>
