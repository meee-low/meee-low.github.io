<script lang="ts">
  import { contactInfo } from "$lib/data";
  import LanguageSelector from "./LanguageSelector.svelte";
  import { darkMode, selectedLanguageString as s } from "$lib/stores";
</script>

<footer class="bg-slate-500 px-[2.5vw] py-2 text-sm text-white">
  <h4 class="mb-2 text-base">Matheus Ferreira Drumond</h4>
  <div class="flex place-content-between content-end">
    <div class="text-sm">
      <p>
        <i class="fa-solid fa-location-dot fa-fw mr-1"
          ><span class="sr-only">Location</span></i
        >{$s.navbarandfooter.location}
      </p>
      <div class="flex flex-wrap gap-x-3">
        <a href={contactInfo.linkedin} class="hover:underline"
          ><i class="fa-brands fa-linkedin fa-fw mr-1">
            <span class="sr-only">Linkedin</span>
          </i>in/mfdrumond</a
        >
        <a href={contactInfo.github} class="hover:underline"
          ><i class="fa-brands fa-github fa-fw mr-1">
            <span class="sr-only">GitHub</span>
          </i>@meee-low</a
        >
        <a href="/my-cv" class="hover:underline"
          ><i class="fa-solid fa-file-lines fa-fw mr-1"> </i>{$s.navbarandfooter
            .resumecv}</a
        >
      </div>
    </div>
    <div class="flex flex-wrap place-content-center gap-2">
      <LanguageSelector></LanguageSelector>
      <button
        role="switch"
        aria-checked={$darkMode}
        on:mousedown={() => {
          $darkMode = !$darkMode;
        }}
        class="h-fit w-11 rounded-full bg-white dark:bg-black {$darkMode
          ? 'text-right'
          : 'text-left'} border-2
        border-transparent text-gray-800 hover:border-gray-800"
        ><i
          class="fa-solid fa-fw text-base {$darkMode
            ? 'fa-moon'
            : 'fa-sun'} rounded-full bg-gray-300"
        ></i><span class="sr-only">Dark theme toggle</span></button
      >
    </div>
  </div>
</footer>
