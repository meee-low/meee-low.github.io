import { expect, test } from "vitest";
import { binarySearch, expectedScore, calcPerformanceRatingForIndividual } from "./algorithms";

test("basic binary search works", () => {
  expect(binarySearch(-1000, 1000, (x) => x - 25)).toBeCloseTo(25, 2);
});

test("Same rating = coin flip", () => {
  expect(expectedScore([1000], 1000)).toBeCloseTo(0.5, 2);
});

test("Multiple opponents with the same ranking just scale the expected score linearly", () => {
  expect(expectedScore([1000, 1000, 1000, 1000], 1000)).toBeCloseTo(2, 2);
});

test("Facing more difficult opponents makes your expected score go down.", () => {
  expect(expectedScore([1100, 1100, 1100, 1100], 1000)).toBeLessThan(
    expectedScore([1000, 1000, 1000, 1000], 1000),
  );
});

test("Wins make you better than opponents", ()=>{
  expect(calcPerformanceRatingForIndividual([1000], 1)).toBeGreaterThan(1000)
})

test("Losses make you worse than opponents", ()=>{
  expect(calcPerformanceRatingForIndividual([1000], 0)).toBeLessThan(1000)
})

test("does this actually slice properly?", ()=> {
  expect([0,1,2,3,4,5,6,7].slice(0,3).concat([0,1,2,3,4,5,6,7].slice(4))).toStrictEqual([0,1,2,4,5,6,7])
})


test("can i just use tosplice?", ()=> {
  expect([0,1,2,3,4,5,6,7].toSpliced(3,1)).toStrictEqual([0,1,2,4,5,6,7])
})
