<script lang="ts">
  import FullCVRender from "$lib/components/cv-builder/printcomponents/FullCVRender.svelte";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import {
    type FullInfo,
    makeEmptyInfo,
  } from "$lib/components/cv-builder/cv-builder-simple";

  let data: FullInfo = makeEmptyInfo(); // make empty as a fallback and to properly SSR
  $: console.log(data);

  onMount(() => {
    const queryString = $page.url.searchParams.get("data");
    if (queryString) {
      const deserialized = JSON.parse(decodeURI(queryString));
      data = { ...data, ...deserialized };
    }
  });
</script>

<FullCVRender {data}></FullCVRender>
