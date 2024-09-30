<script lang="ts">
  import { selectedLanguageString as s } from "$lib/stores";
  import { Ranker, evaluatingFunctions } from "../ranker/ranker";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let debugMode: boolean = false;
  onMount(() => {
    debugMode = $page.url.searchParams.has("debug");
  });

  const DIRECTION = {
    LEFT: 0,
    RIGHT: 1,
  } as const;

  type Direction = (typeof DIRECTION)[keyof typeof DIRECTION];

  let ranker: Ranker<string> | undefined;
  const evaluator = evaluatingFunctions.bradleyTerry

  let input: string;
  let validationError = "";
  let words: string[] = [];
  $: sortedWords = ranker
    ? ranker.sortedElements(evaluator)
    : words;
  $: wordScores = ranker
    ? ranker.evaluate(evaluator)
    : words.map((_) => 0);

  let currentWords: [string, string] = ["", ""];

  function sendListOfWords() {
    words = input.split(","); // TODO: separate by new lines, commas, semi-colons etc.
    ranker = new Ranker(words);
    selectNewWords();
  }

  function selectNewWords() {
    if (!ranker) {
      return;
    }
    currentWords = ranker.suggestComparison();
  }

  function handleWinner(leftOrRight: Direction) {
    ranker?.addComparison(
      currentWords[leftOrRight],
      currentWords[(leftOrRight + 1) % 2],
    );
    ranker = ranker; // trigger reactivity.
    selectNewWords();
  }
</script>

{#if !ranker}
  <form>
    {#if validationError}
      <span class="text-red-600">{validationError}</span>
    {/if}
    <label>
      <textarea bind:value={input} rows="5" cols="40" class="border"></textarea>
    </label>
    <button class="block rounded-md border p-2" on:click={sendListOfWords}
      >{$s.interactive.ranker.sendButtonText}</button
    >
  </form>
{:else}
  <div class="flex gap-2 px-[5vw]">
    <button class="border p-2" on:click={() => handleWinner(0)}
      >{currentWords[0]}</button
    >
    <button class="border p-2" on:click={() => handleWinner(1)}
      >{currentWords[1]}</button
    >
  </div>
  <div>
    <ul>
      {#each sortedWords as word}
        <li>
          {`${word}`}
        </li>
      {/each}
    </ul>
  </div>
{/if}

{#if debugMode}
  <pre>
  {JSON.stringify(
      {
        words,
        wordScores,
        ranker: {
          // @ts-expect-error
          elements: ranker?.elements, 
          // @ts-expect-error
          matrix: ranker?.comparisons.toArrayOfArrays(),
        },
      },
      null,
      2,
    )}
</pre>
{/if}
