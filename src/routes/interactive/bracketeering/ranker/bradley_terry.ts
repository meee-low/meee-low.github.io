// see: https://en.wikipedia.org/wiki/Bradley%E2%80%93Terry_model

import type { Matrix } from "$lib/math/linalg";

export function bradleyTerryEvaluator(m: Matrix): number[] {
  throw new Error("Not implemented");
}

function geometricMean(numbers: number[]): number {
  return Math.pow(
    numbers.reduce((acc, n) => acc * n, 1),
    numbers.length,
  );
}
