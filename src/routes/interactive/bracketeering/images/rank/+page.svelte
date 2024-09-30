<script lang="ts">
  import { onMount } from "svelte";
  import {
    evaluatingFunctions,
    PairwiseRanker,
    MATCHMAKING_STRATEGY,
  } from "../../ranker/ranker";
  import {
    imagesStore,
    sortedImages,
    type ImageForRanking,
  } from "../images_store";
  import { goto } from "$app/navigation";

  let ranker: PairwiseRanker<ImageForRanking>;
  const evaluator = evaluatingFunctions.bradleyTerry;
  const mmStrategy = MATCHMAKING_STRATEGY.fewestComparisonsFirst;

  let errorTooFew = false;

  let comparisonCounter = 0;

  let currentImages: [ImageForRanking, ImageForRanking];

  onMount(() => {
    if ($imagesStore.length >= 2) {
      ranker = new PairwiseRanker($imagesStore);
      currentImages = ranker.currentlyCompared;
    } else {
      errorTooFew = true;
    }
  });

  function goToResults() {
    $sortedImages = ranker.sortedElements(evaluator);
    goto(`./results`);
  }
</script>

{#if errorTooFew}
  <p class="text-red-500">
    Error: Not enough images to start comparing. Need at least 2.
  </p>
  <a class="text-blue-500 underline" href="./"
    >Click here to go back and add images.</a
  >
{:else}
  <div class="grid grid-cols-2 gap-6 px-20">
    {#if currentImages}
      {#each currentImages as image, idx}
        <button
          class="rounded-md border-2 border-black"
          on:click={() => {
            // @ts-ignore
            ranker.handleWinner(idx);
            currentImages = ranker.newComparison(mmStrategy);
            comparisonCounter += 1;
            ranker = ranker;
          }}
        >
          <img class="mx-auto object-cover" src={image.url} alt="" />
          <span
            class="block overflow-hidden text-ellipsis whitespace-nowrap text-center"
            >{image.file.name}</span
          >
        </button>
      {/each}
    {/if}
  </div>

  <span class="block"
    >{`You have made ${ranker ? ranker.getTotalComparisons() : 0} comparisons.`}</span
  >
  <span class="block">{`There are ${$imagesStore.length} total images.`}</span>
  <span class="block"
    >{`We recommend doing between ${$imagesStore.length} and ${Math.round($imagesStore.length * Math.log2($imagesStore.length))} comparisons for accurate results.`}</span
  >

  <button class="m-4 rounded-sm border border-black p-2" on:click={goToResults}
    >Finish ranking</button
  >
{/if}
