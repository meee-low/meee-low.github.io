<script lang="ts">
  import type { Writable } from "svelte/store";
  import { type BulletPoints as BP } from "../../cv-builder-simple";
  import BulletPoints from "../BulletPoints.svelte";

  export let title: string;
  export let bullets: Writable<BP>;
</script>

<section class="mb-2">
  <h2 class="font-bold text-lg">{title}</h2>
  <BulletPoints {bullets}></BulletPoints>
</section>
