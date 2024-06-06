<script>
  import Footer from "$lib/components/Footer.svelte";
  import NavBar from "$lib/components/NavBarHero.svelte";
  import { onMount } from "svelte";
  import "../app.css";
  import { darkMode } from "$lib/stores";

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

<NavBar></NavBar>
<main class="flex-grow">
  <slot></slot>
</main>
<Footer></Footer>
