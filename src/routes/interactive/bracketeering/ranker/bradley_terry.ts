// see: https://en.wikipedia.org/wiki/Bradley%E2%80%93Terry_model

import type { Matrix } from "$lib/math/linalg";

export function bradleyTerryEvaluator(m: Readonly<Matrix>): number[] {
  const maxIter = 10;
  let estimates: number[] = new Array(m.rows).fill(1);
  for (let it = 0; it < maxIter; ++it) {
    estimates = bradleyTerryAllIter(m, estimates);

    const geomMean = geometricMean(estimates);
    for (let i = 0; i < estimates.length; ++i) {
      estimates[i] /= geomMean;
    }
  }
  return estimates;
}

function geometricMean(numbers: Readonly<number[]>): number {
  return Math.pow(
    numbers.reduce((acc, n) => acc * n, 1),
    1 / numbers.length,
  );
}

function bradleyTerrySpecific(
  m: Readonly<Matrix>,
  estimates: number[],
  idx: number,
): number {
  const p = estimates[idx];

  let newEstimateNum = 0;
  let newEstimateDen = 0;
  for (let j = 0; j < estimates.length; ++j) {
    if (j === idx) {
      continue;
    }
    const pj = estimates[j];
    newEstimateNum += (m.at(idx, j) * pj) / (p + pj);
    newEstimateDen += m.at(j, idx) / (p + pj);
  }

  const makeItNotZero = 1;

  return (newEstimateNum + makeItNotZero) / (newEstimateDen + makeItNotZero);
}

function bradleyTerryAllIter(
  m: Readonly<Matrix>,
  estimates: number[],
): number[] {
  for (let i = 0; i < estimates.length; ++i) {
    estimates[i] = bradleyTerrySpecific(m, estimates, i);
  }
  return estimates;
}

function getWins(m: Readonly<Matrix>, idx: number): number {
  return m.getRow(idx).reduce((acc, x) => acc + x, 0);
}

function getLosses(m: Readonly<Matrix>, idx: number): number {
  return m.getCol(idx).reduce((acc, x) => acc + x, 0);
}
