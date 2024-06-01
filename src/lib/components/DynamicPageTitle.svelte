<script lang="ts">
  import {page} from "$app/stores";
  import {derived} from "svelte/store"

  // Helper function to convert strings to title case
  function toTitleCase(str: string): string {
    return str
      .replace("-", " ")
      .replace("_", " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  }

  // Derived store to get the title based on the path
  let title = derived(page, $page => {
    const path = $page.url.pathname;
    if (path === '/') {
      return "M. Drumond's Page";
    } else {
      const segments = path.split('/').filter(segment => segment);
      const titleSegments = segments.map(segment => toTitleCase(segment));
      // return `MFD - ${titleSegments.join(' - ')}`;
      return `MFD - ${titleSegments[titleSegments.length - 1]}`
    }
  });
</script>


<svelte:head>
  <title>{$title}</title>
</svelte:head>