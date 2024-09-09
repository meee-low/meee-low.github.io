<script lang="ts">
  import { selectedLanguageString as s } from "$lib/stores";
  import { calcPerformanceRatingForAll } from "../ranker/algorithms";

  const DIRECTION = {
    LEFT: 0,
    RIGHT: 1,
  } as const;

  type Direction = (typeof DIRECTION)[keyof typeof DIRECTION];

  enum RankerState {
    INPUTTING,
    RANKING,
  }

  let input: string;
  let validationError = "";
  let words: string[] = [];

  let wordScores: number[] = [];
  $: wordRankings = calcPerformanceRatingForAll(wordScores);

  let rankerState: RankerState = RankerState.INPUTTING;

  let currentWordsIndexes: [number, number];

  function sendListOfWords() {
    words = input.split(","); // TODO: separate by new lines, commas, semi-colons etc.
    wordScores = Array(words.length).fill(1);
    wordScores = wordScores; // trigger reactivity
    selectNewWords();
    rankerState = RankerState.RANKING;
  }

  function getTwoRandomDifferentIndexes(max: number): [number, number] {
    // max is not inclusive, so this should work with '.length'

    const index1 = Math.floor(Math.random() * max);

    let index2;
    do {
      index2 = Math.floor(Math.random() * max);
    } while (index2 === index1);

    return [index1, index2];
  }

  function selectNewWords() {
    currentWordsIndexes = getTwoRandomDifferentIndexes(words.length);
  }

  function handleWinner(leftOrRight: Direction) {
    const winnerIdx = currentWordsIndexes[leftOrRight];
    wordScores[winnerIdx]++;
    wordScores = wordScores;
    selectNewWords();
  }
</script>

{#if rankerState === RankerState.INPUTTING}
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
{:else if rankerState === RankerState.RANKING}
  <div>
    <button class="border p-2" on:click={() => handleWinner(0)}
      >{words[currentWordsIndexes[0]]}</button
    >
    <button class="border p-2" on:click={() => handleWinner(1)}
      >{words[currentWordsIndexes[1]]}</button
    >
  </div>
  <div>
    <ul>
      {#each words as word, idx}
        <li>
          {`${word}: ${wordRankings[idx]}`}
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <div>
    Error: Unreachable. If you see this in the live website, please report it as
    a bug.
  </div>
{/if}

<pre>
  {JSON.stringify({ words, wordScores, wordRankings }, null, 2)}
</pre>
