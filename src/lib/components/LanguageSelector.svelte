<script lang="ts">
  import { selectedLanguage } from "$lib/stores";
</script>

<div class="relative">
  <label>
    <i
      class="fa-solid fa-globe fa-fw absolute left-1 top-1/2 -translate-y-1/2 text-black"
    >
      <span class="sr-only">Language</span>
    </i>
    <select
      bind:value={$selectedLanguage}
      class="rounded-full p-1 pl-5 text-black"
    >
      <option value="en" class="text-black" selected>English</option>
      <option value="pt-br" class="text-black">Português</option>
    </select>
  </label>
</div>
