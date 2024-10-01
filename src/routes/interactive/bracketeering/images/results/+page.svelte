<script lang="ts">
  import { sortedImages } from "../images_store";
  import JSZIP from "jszip";
  import saveAs from "$lib/utils/save_file"

  async function renameZipAndDownload() {
    const zip = new JSZIP();
    const images = $sortedImages;
    
    const digits = Math.ceil(Math.log10(images.length + 1));

    images.forEach((image, idx) => {
      const rank = (idx + 1).toString().padStart(digits, "0");
      const newName = `${rank} ${image.file.name}`;

      zip.file(newName, image.file, { binary: true });
    });

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "ranked_images.zip");
  }
</script>

<button on:click={renameZipAndDownload} class="border border-black p-2">Download</button>

<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
  {#each $sortedImages as image, idx}
    <div class="max-h-[20vh]" >
      <img class="border object-contain mx-auto max-h-[80%]" src={image.url} alt="" />
      <span
        class="block overflow-hidden text-ellipsis whitespace-nowrap text-center"
        >{`#${idx+1} - ${image.file.name}`}</span
      >
    </div>
  {/each}
</div>
