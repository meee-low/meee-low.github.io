import { Matrix } from "$lib/math/linalg";
import { bradleyTerryEvaluator } from "./bradley_terry";
import { rankByWinrate } from "./winrate_ranker";

const DIRECTION = {
  LEFT: 0,
  RIGHT: 1,
} as const;

export type Direction = (typeof DIRECTION)[keyof typeof DIRECTION];

type Evaluator = (m: Readonly<Matrix>) => number[];

export class Ranker<T> {
  protected readonly elements: Readonly<T>[];
  protected comparisons: Matrix;

  constructor(elements: T[]) {
    if (elements.length <= 1) {
      throw new Error("Must have at least 2 elements to start ranking.");
    }

    const s = new Set(elements);
    if (s.size !== elements.length) {
      throw new Error("Elements should all be distinct.");
    }
    this.elements = [...elements];
    this.comparisons = new Matrix(this.elements.length, this.elements.length);
  }

  evaluate(evaluator: Evaluator): number[] {
    return evaluator(this.comparisons);
  }

  public sortedElements(evaluator: Evaluator): T[] {
    const ranks = this.evaluate(evaluator);

    return (
      this.elements.map((value, idx) => [value, ranks[idx]]) as [T, number][]
    ) // zip with the ranks
      .sort(([, rankA], [, rankB]) => rankB - rankA) // sort according to the ranks
      .map(([val]) => val) /** remove the ranks, keep only the values */;
  }

  public addComparison(winner: Readonly<T>, loser: Readonly<T>) {
    const winnerIdx = this.elements.indexOf(winner);
    const loserIdx = this.elements.indexOf(loser);
    if (winnerIdx < 0 || loserIdx < 0) {
      throw new Error("This pair was not found in the ranker.");
    }
    this.comparisons.applyToCell(winnerIdx, loserIdx, (x) => x + 1);
  }

  public suggestComparison(
    matchmakingStrategy: Evaluator = MATCHMAKING_STRATEGY.random,
  ): [T, T] {
    const evals = matchmakingStrategy(this.comparisons);

    let evalMap: Record<number, number[]> = {};

    evals.forEach((val, i) => {
      if (!evalMap[val]) {
        evalMap[val] = [];
      }
      evalMap[val].push(i);
    });

    const sortedKeys = Object.keys(evalMap)
      .map(Number)
      .sort((a, b) => a - b);

    const lowest = evalMap[sortedKeys[0]];
    let idx1 = -1;
    let idx2 = -1;
    if (lowest.length >= 2) {
      // Grab both from here
      [idx1, idx2] = getTwoRandomDifferentIndexes(lowest.length);
    } else {
      idx1 = lowest[randomBetweenZeroAndN(lowest.length)];
      const secLowest = evalMap[sortedKeys[1]];
      idx2 = secLowest[randomBetweenZeroAndN(secLowest.length)];
    }

    console.assert(idx1 >= 0);
    console.assert(idx2 >= 0);
    console.assert(idx1 !== idx2);

    if (Math.random() < 0.5) {
      return [this.elements[idx1], this.elements[idx2]];
    } else {
      return [this.elements[idx2], this.elements[idx1]];
    }
  }

  public getTotalComparisons() {
    let result = 0;
    for (let i = 0; i < this.comparisons.rows; i++) {
      for (let j = 0; j < this.comparisons.cols; j++) {
        result += this.comparisons.at(i, j);
      }
    }
    return result;
  }
}

export class PairwiseRanker<T> extends Ranker<T> {
  currentlyCompared: [T, T];

  constructor(elements: T[]) {
    super(elements);
    const idxs = getTwoRandomDifferentIndexes(elements.length);
    this.currentlyCompared = [this.elements[idxs[0]], this.elements[idxs[1]]];
  }

  public newComparison(
    matchmakingStrategy: Evaluator = MATCHMAKING_STRATEGY.random,
  ): [T, T] {
    this.currentlyCompared = this.suggestComparison(matchmakingStrategy);
    return this.currentlyCompared;
  }

  public handleWinner(leftOrRight: Direction) {
    this.addComparison(
      this.currentlyCompared[leftOrRight],
      this.currentlyCompared[(leftOrRight + 1) % 2],
    );
  }
}

function randomBetweenZeroAndN(n: number): number {
  return Math.floor(Math.random() * n);
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

  const index1 = randomBetweenZeroAndN(max);
  const offset = randomBetweenZeroAndN(max - 1) + 1;
  const index2 = (index1 + offset) % max;

  console.assert(0 <= index1);
  console.assert(0 <= index2);
  console.assert(index1 < max);
  console.assert(index2 < max);
  console.assert(index1 !== index2);

  return [index1, index2];
}

function eloPrediction(m: Readonly<Matrix>): number[] {
  throw new Error("Not implemented");
}

export const evaluatingFunctions = {
  elo: eloPrediction,
  winrate: rankByWinrate,
  bradleyTerry: bradleyTerryEvaluator,
} as const satisfies Record<string, Evaluator>;

function fewestComparisonsFirst(m: Readonly<Matrix>): number[] {
  let matchesPlayed: number[] = Array(m.rows).fill(0);
  for (let i = 0; i < m.rows; ++i) {
    for (let j = 0; j < m.cols; ++j) {
      matchesPlayed[i] += m.at(i, j);
      matchesPlayed[j] += m.at(i, j);
    }
  }
  return matchesPlayed;
}

export const MATCHMAKING_STRATEGY = {
  random: (m: Readonly<Matrix>) => {
    let result = new Array(m.rows, 0);
    for (let i = 0; i < m.rows; ++i) {
      result[i] = Math.random();
    }
    return result;
  },
  fewestComparisonsFirst: fewestComparisonsFirst,
} as const satisfies Record<string, Evaluator>;
