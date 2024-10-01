<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount, tick } from "svelte";
  import { imagesStore } from "./images_store";

  let totalImages = 0;

  $: loadingImages = !($imagesStore.length === totalImages);

  onMount(()=>{totalImages=$imagesStore.length})

  async function handleImageUpload(
    event: Event & { currentTarget: EventTarget & HTMLInputElement },
  ) {
    const input = event.currentTarget;
    if (!input.files) {
      return;
    }
    const files = Array.from(input.files);
    totalImages += files.length;

    const promises = files.map((file) => {
      new Promise<void>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (
            e.target &&
            e.target.result &&
            typeof e.target.result === "string"
          ) {
            $imagesStore = [...$imagesStore, { url: e.target.result, file }];
            tick().then(resolve);
          } else {
            resolve();
          }
        };
        reader.readAsDataURL(file);
      });
    });

    await Promise.all(promises);
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    const currentPath = window.location.pathname;
    goto(`${currentPath}/rank`);
  }

  // TODO: ellipse the middle of the file when it overflows.
</script>

{#if loadingImages}
  <div>
    {`Loading... Loaded ${$imagesStore.length} out of ${totalImages} images.`}
  </div>
{/if}

<form on:submit={handleSubmit}>
  <input
    class="mb-4"
    type="file"
    accept="image/*"
    multiple
    on:change={handleImageUpload}
  />
  <input
    class="{loadingImages
      ? 'cursor-wait'
      : 'cursor-pointer'} block rounded-sm border border-black p-2"
    type="submit"
    disabled={loadingImages}
  />
</form>

<div class="grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-8">
  {#each $imagesStore as image, idx}
    <div class="max-h-[33vh]">
      <img
        class="mx-auto max-h-[85%] max-w-full border object-contain"
        src={image.url}
        alt={`Uploaded image ${idx}`}
      />
      <span
        class="block overflow-hidden text-ellipsis whitespace-nowrap text-center"
        >{image.file.name}</span
      >
    </div>
  {/each}
</div>
