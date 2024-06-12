<script>
  import Footer from "$lib/components/Footer.svelte";
  import NavBar from "$lib/components/NavBarHero.svelte";
  import { onMount } from "svelte";
  import "../app.css";
  import { darkMode } from "$lib/stores";
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
  });
</script>

<DynamicPageTitle></DynamicPageTitle>

<NavBar></NavBar>
<main class="max-w-[100vw] flex-grow overflow-auto">
  <slot></slot>
</main>
<Footer></Footer>
