<script lang="ts">
  let languageSelected = "English";

  function changeLanguage(newLanguage: string) {
    languageSelected = newLanguage;
  }
</script>

<div class="relative">
  <button
    popovertarget="language-selection"
    class="flex w-[14ch] place-content-between items-center rounded-full border bg-white px-2 py-1 text-black hover:bg-white/70"
  >
    <span>{languageSelected}</span>
    <i class="fa-fw fa-solid {'fa-chevron-up'}"></i>
  </button>
  <div popover="auto" id="language-selection" class="absolute z-10 top-6 border">
    <ul>
      <li>
        <button
          popovertarget="language-selection"
          popovertargetaction="hide"
          on:click={() => changeLanguage("English")}
          class="block w-full border-b p-1 text-left hover:bg-blue-300"
          >English</button>
      </li>
      <li>
        <button
          popovertarget="language-selection"
          popovertargetaction="hide"
          on:click={() => changeLanguage("Português")}
          class="block w-full p-1 text-left hover:bg-blue-300">Português</button
        >
      </li>
    </ul>
  </div>
</div>
