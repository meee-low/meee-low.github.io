<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import NavBar from "$lib/components/NavBarHero.svelte";
  import { onMount } from "svelte";
  import "../app.css";
  import { darkMode, selectedLanguage } from "$lib/stores";
  import DynamicPageTitle from "$lib/components/DynamicPageTitle.svelte";

  onMount(() => {
    // set dark mode (from tailwindcss on dark)
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      $darkMode = true;
    } else {
      $darkMode = false;
    }

    // language
    if (!("userLanguage" in localStorage)) {
      if (["en", "pt-BR"].includes(navigator.language)) {
        $selectedLanguage = navigator.language as typeof $selectedLanguage;
      } else {
        // ensure English is the default.
        $selectedLanguage = "en";
      }
    } else {
      const storedLang = localStorage.getItem("userLanguage");
      if (storedLang === "pt-BR" || storedLang === "en") {
        $selectedLanguage = storedLang as "en" | "pt-BR";
      } else {
        // Something likely went wrong, but just fallback to English.
        $selectedLanguage = "en";
      }
    }
  });
</script>

<DynamicPageTitle></DynamicPageTitle>

<NavBar></NavBar>
<main class="max-w-[100vw] flex-grow overflow-auto">
  <slot></slot>
</main>
<Footer></Footer>
