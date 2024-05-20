<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  import Socials from "$lib/components/navcomponents/Socials.svelte";

  let isScrolled = true;

  function handleScroll() {
    // TODO: Make scrolling properly close it
    // isScrolled = window.scrollY > 700;
  }
  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<header
  id="navbar"
  class="z-50 w-full bg-slate-500 shadow-md {isScrolled ? '' : 'min-h-[70vh]'}"
>
  <div class="flex content-center p-4 px-[5vw]">
    <img
      src="/e8petrie_0.png"
      alt="Logo"
      class="m-auto mr-6 max-h-20 max-w-20"
    />
    <div class="flex w-full flex-wrap items-center justify-between">
      <nav
        class="grid grid-cols-1 font-mono text-2xl tracking-wider text-white max-md:mb-4 md:flex md:gap-6"
      >
        <a class="hover:underline" href="/"> Showcase</a>
        <a class="hover:underline" href="/interactive"> Interactive</a>
        <a class="hover:underline" href="/blog">Blog</a>
      </nav>
      <Socials></Socials>
    </div>
  </div>
  {#if !isScrolled}
    <h1 class="select-none p-8 text-center text-6xl tracking-wide text-white">
      Matheus Ferreira Drumond
    </h1>
  {/if}
</header>
