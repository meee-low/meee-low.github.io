<script lang="ts">
  import { selectedLanguage } from "$lib/stores";

  let selectEl: HTMLSelectElement;

  const unsub = selectedLanguage.subscribe((val) => {
    if (typeof val !== "undefined") {
      selectEl.value = val;
    }
  });

  function handleLangOptionChange(
    e: Event & { currentTarget: EventTarget & HTMLSelectElement },
  ) {
    const val = e.currentTarget.value;
    if (typeof val === typeof $selectedLanguage) {
      $selectedLanguage = val as "en" | "pt-BR";
    }
  }
</script>

<div class="relative">
  <label>
    <i
      class="fa-solid fa-globe fa-fw absolute left-1 top-1/2 -translate-y-1/2 text-black"
    >
      <span class="sr-only">Language</span>
    </i>
    <select
      on:change={handleLangOptionChange}
      bind:this={selectEl}
      class="rounded-full p-1 pl-5 text-black"
    >
      <option value="en" class="text-black">English</option>
      <option value="pt-BR" class="text-black">Português</option>
    </select>
  </label>
</div>
