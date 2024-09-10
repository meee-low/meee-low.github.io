import { Matrix } from "$lib/math/linalg";
import { rankByWinrate } from "./winrate_ranker";

export class Ranker<T> {
  private readonly elements: T[];
  private comparisons: Matrix;

  constructor(elements: T[]) {
    if (elements.length <= 1) {
      throw new Error("Must have at least 2 elements to start ranking.");
    }

    const s = new Set(elements);
    if (s.size !== elements.length) {
      throw new Error("Elements should all be distinct.");
    }

    this.elements = elements;
    this.comparisons = new Matrix(this.elements.length, this.elements.length);
  }

  evaluate(evaluator: (m: Matrix) => number[]): number[] {
    return evaluator(this.comparisons);
  }

  public sortedElements(evaluator: (m: Matrix) => number[]): T[] {
    const ranks = this.evaluate(evaluator);

    return (
      this.elements.map((value, idx) => [value, ranks[idx]]) as [T, number][]
    ) // zip with the ranks
      .sort(([, rankA], [, rankB]) => rankB - rankA) // sort according to the ranks
      .map(([val]) => val) /** remove the ranks, keep only the values */;
  }

  public addComparison(winner: T, loser: T) {
    const winnerIdx = this.elements.indexOf(winner);
    const loserIdx = this.elements.indexOf(loser);
    if (winnerIdx < 0 || loserIdx < 0) {
      throw new Error("This pair was not found in the ranker.");
    }
    this.comparisons.applyToCell(winnerIdx, loserIdx, (x) => x + 1);
  }

  public suggestComparison(): [T, T] {
    let idx1: number, idx2: number;
    try {
      [idx1, idx2] = getTwoRandomDifferentIndexes(this.elements.length);
    } catch {
      throw new Error("This should not happen.");
    }
    return [this.elements[idx1], this.elements[idx2]];
  }
}

/**
 * Gets two indexes from [0, `max`). `max` is NOT inclusive, so this should work with '.length'.
 *
 * Throws if max < 2.
 *
 * @param max the maximum (non-inclusive) integer that it may return. Needs to be >= 2, or this function will throw. Ideally an integer but no reliance on that.
 * @returns
 */
function getTwoRandomDifferentIndexes(max: number): [number, number] {
  if (max < 2) {
    throw new Error(`Need at least 2, got ${max}.`);
  }

  const index1 = Math.floor(Math.random() * max);
  let index2;
  do {
    index2 = Math.floor(Math.random() * max);
  } while (index2 === index1);

  return [index1, index2];
}

function eloPrediction(m: Matrix): number[] {
  throw new Error("Not implemented");
}

export const evaluatingFunctions = {
  elo: eloPrediction,
  winrate: rankByWinrate,
} as const;
