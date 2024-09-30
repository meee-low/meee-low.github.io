<script lang="ts">
  import { goto } from "$app/navigation";
  import { imagesStore } from "./images_store";

  function handleImageUpload(
    event: Event & { currentTarget: EventTarget & HTMLInputElement },
  ) {
    const input = event.currentTarget;
    if (!input.files) {
      return;
    }
    const files = Array.from(input.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          $imagesStore = [
            ...$imagesStore,
            { url: e.target.result as string, file },
          ];
        }
      };
      reader.readAsDataURL(file);
    });
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    const currentPath = window.location.pathname;
    goto(`${currentPath}/rank`);
  }

  // TODO: ellipse the middle of the file when it overflows.
</script>

<form on:submit={handleSubmit}>
  <input
    class="mb-4"
    type="file"
    accept="image/*"
    multiple
    on:change={handleImageUpload}
  />
  <input class="block rounded-sm border border-black p-2" type="submit" />
</form>

<div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
  {#each $imagesStore as image, idx}
    <div>
      <img
        class="border object-cover p-1 mx-auto"
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
