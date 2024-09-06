<script lang="ts">
  interface Cell {
    col: number;
    row: number;
    color: string;
    width: number;
  }

  let cells: Cell[] = [];

  $: maxCol = Math.max(-1, ...cells.map((c) => c.col));

  function addCell() {
    function generateRandomColor() {
      return "red";
    }
    function generateRandomWidth() {
      return Math.round(Math.random() * 300 + 50);
    }
    const roll = Math.random();
    if (maxCol < 0 || roll > 0.5) {
      // add cell to new col
      cells.push({
        col: maxCol + 1,
        row: 0,
        color: generateRandomColor(),
        width: generateRandomWidth(),
      });
    } else {
      // add cell to a random preexisting column
      const col = Math.floor(Math.random() * maxCol);
      const countInCol = cells.filter((c) => c.col === col).length;
      cells.push({
        col: col,
        row: countInCol,
        color: generateRandomColor(),
        width: generateRandomWidth(),
      });
    }
    cells = cells;
  }
</script>

<button class="border p-2" on:click={addCell}>Add Cell</button>

<div class="m-8 grid gap-1 min-h-20 overflow-auto border">
  {#each cells as c}
    <div
      class="border"
      style="width: {c.width}px; background-color: {c.color}; height: 50px; grid-column: {c.col +
        1}; grid-row: {c.row + 1} "
    >
      <pre>{JSON.stringify(c)}</pre>
    </div>
  {/each}
</div>