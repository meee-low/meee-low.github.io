<script lang="ts">
  let languageSelected: string;
</script>

<label>
  <i class="fa-solid fa-globe">
  <span class="sr-only">Language</span>
</i>
<select bind:value={languageSelected} class="rounded-full text-black p-1">
  <option value="en" class="text-black" selected>English</option>
  <option value="pt-br" class="text-black">Português</option>
</select>
</label>