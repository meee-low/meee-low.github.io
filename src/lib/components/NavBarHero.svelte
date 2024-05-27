<script lang="ts">
  import Socials from "$lib/components/navcomponents/Socials.svelte";

  const navLinks = [
    { title: "Highlights", link: "/", faTag: "fa-solid fa-eye" },
    { title: "Interactive", link: "/interactive", faTag: "fa-solid fa-dice" },
    { title: "Blog", link: "/blog", faTag: "fa-solid fa-blog" },
  ];
</script>

<header id="navbar" class="z-50 w-full bg-slate-500 shadow-md">
  <div class="flex content-center p-4 pr-[5vw]">
    <a href="/" class="m-auto">
      <img
        src="/e8petrie_0.webp"
        alt="Logo"
        class="ml-2 mr-6 max-h-20 max-w-20 md:max-h-14 md:max-w-14"
      />
      <span class="sr-only">Logo</span>
    </a>
    <div class="flex w-full flex-wrap items-center justify-between">
      <nav
        class="font-mono text-2xl tracking-wider text-white "
      >
        <ul class="max-md:mb-4 max-md:grid max-md:grid-cols-1 md:flex md:gap-6">
          {#each navLinks as navL}
            <li class="inline-block">
              <a class="flex items-center hover:text-teal-100" href={navL.link}
                ><i
                  class="{navL.faTag} mr-1 text-sm min-[0px]:max-[420px]:hidden"
                  aria-hidden="true"
                ></i>{navL.title}
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
  @media print {
    header * {
      display: none;
    }
  }
</style>
