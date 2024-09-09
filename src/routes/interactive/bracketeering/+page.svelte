<script lang="ts">
  const thisPage = "/interactive/bracketeering/";

  const subpages = [
    {
      title: "Images",
      link: "images",
    },
    {
      title: "Text",
      link: "list",
    },
  ] as const;
</script>

<div class="flex gap-4 px-[5vw]">
  {#each subpages as page}
    <a
      class="min-h-10 min-w-24 rounded-sm border border-black p-2 text-center hover:underline"
      href={thisPage + page.link}
    >
      {page.title}
    </a>
  {/each}
</div>
