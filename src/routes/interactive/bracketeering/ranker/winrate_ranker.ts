import type { Matrix } from "$lib/math/linalg";

export function rankByWinrate(m: Readonly<Matrix>): number[] {
  let result = [];

  for (let i = 0; i < m.rows; ++i) {
    const wins: number = m.getRow(i).reduce((acc, x) => acc + x, 0) + 1;
    const losses: number = m.getCol(i).reduce((acc, x) => acc + x, 0) + 1;
    result.push(wins / (wins + losses));
  }
  return result;
}
