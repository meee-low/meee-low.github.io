import { Matrix } from "$lib/math/linalg";
import { test, expect } from "vitest";
import { bradleyTerryEvaluator } from "./bradley_terry";

test("Bradley-Terry: equals remain equal.", () => {
  let m = Matrix.fromArrayOfArrays([
    [0, 3, 3],
    [3, 0, 3],
    [3, 3, 0],
  ]);
  let evals = bradleyTerryEvaluator(m);
  return expect(evals[0]).toBeCloseTo(evals[1], 4);
});

test("Bradley-Terry: more wins => bigger eval", () => {
  let m = Matrix.fromArrayOfArrays([
    [0, 0, 2],
    [0, 0, 1],
    [1, 1, 0],
  ]);
  let evals = bradleyTerryEvaluator(m);
  return expect(evals[0]).toBeGreaterThan(evals[1]);
});

test("Bradley-Terry: wikipedia example", () => {
  let m = Matrix.fromArrayOfArrays([
    [0, 2, 0, 1],
    [3, 0, 5, 0],
    [0, 3, 0, 1],
    [4, 0, 3, 0],
  ]);
  let evals = bradleyTerryEvaluator(m);
  console.log(evals);
  return expect(evals[3]).toBeGreaterThan(evals[1]);
});
