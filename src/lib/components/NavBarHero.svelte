<script lang="ts">
  import Socials from "$lib/components/navcomponents/Socials.svelte";
  import { selectedLanguageString as s } from "$lib/stores";

  $: navLinks = [
    {
      title: $s.navbarandfooter.highlights,
      link: "/",
      faTag: "fa-solid fa-eye",
    },
    {
      title: $s.navbarandfooter.interactive,
      link: "/interactive",
      faTag: "fa-solid fa-dice",
    },
    {
      title: $s.navbarandfooter.blog,
      link: "/blog",
      faTag: "fa-solid fa-blog",
    },
  ] as const;
</script>

<header id="navbar" class="z-50 w-full bg-slate-500 shadow-md">
  <div class="flex content-center py-2 pl-4 pr-[2.5vw]">
    <a href="/" class="m-auto">
      <img
        src="/e8petrie_0.webp"
        alt="Logo"
        class="ml-2 mr-6 max-h-20 max-w-20 md:max-h-14 md:max-w-14"
      />
      <span class="sr-only">Logo</span>
    </a>
    <div
      class="flex w-full flex-wrap place-content-between content-center items-center gap-x-6 align-middle"
    >
      <nav
        class="flex content-center items-center font-mono text-2xl tracking-wider text-white"
      >
        <ul class="max-md:mb-4 max-md:grid max-md:grid-cols-1 md:flex md:gap-2">
          {#each navLinks as navL}
            <li class="inline-block h-full px-2 hover:bg-black/10">
              <a
                class="flex h-full items-center hover:text-teal-100"
                href={navL.link}
                ><span class="flex items-center"
                  ><i
                    class="{navL.faTag} mr-1 text-sm min-[0px]:max-[420px]:hidden"
                    aria-hidden="true"
                  ></i>{navL.title}</span
                >
              </a>
            </li>
          {/each}
        </ul>
      </nav>
      <Socials></Socials>
    </div>
  </div>
  {#if false}
    <h1 class="select-none p-8 text-center text-6xl tracking-wide text-white">
      Matheus Ferreira Drumond
    </h1>
  {/if}
</header>

<style>
  nav ul > :first-child {
    padding-left: 0;
    padding-right: 0.5rem;
  }
  nav ul > :first-child {
    padding-right: 0;
  }
</style>
