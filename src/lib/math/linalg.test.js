import { expect, test } from "vitest";
import { Matrix } from "./linalg";

test("matrix multiplication: multiplying by 0", () => {
  const m1 = new Matrix(3, 3, 2);
  const m2 = new Matrix(3, 3, 0);
  return expect(m1.matMult(m2)).toStrictEqual(new Matrix(3, 3, 0));
});

test("matrix multiplication: multiplying by identity", () => {
  const dim = 6;
  let m1 = new Matrix(dim, dim);
  m1.applyToAll((_) => Math.floor(Math.random() * 20 - 10));
  const id = Matrix.identity(dim);
  return expect(m1.matMult(id)).toStrictEqual(m1);
});

test("matrix from array", () => {
  const arr = [0, 1, 2, 3, 4, 5];
  const m1 = Matrix.fromArray(arr, [2, 3]);
  const m2 = new Matrix(2, 3);
  m2.set(0, 0, 0);
  m2.set(0, 1, 1);
  m2.set(0, 2, 2);
  m2.set(1, 0, 3);
  m2.set(1, 1, 4);
  m2.set(1, 2, 5);
  return expect(m1).toStrictEqual(m2);
});

test("matrix from array of arrays", () => {
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
  ];
  const m1 = Matrix.fromArrayOfArrays(arr);
  const m2 = new Matrix(2, 3);
  m2.set(0, 0, 0);
  m2.set(0, 1, 1);
  m2.set(0, 2, 2);
  m2.set(1, 0, 3);
  m2.set(1, 1, 4);
  m2.set(1, 2, 5);
  return expect(m1).toStrictEqual(m2);
});

test("matrix to array of arrays", () => {
  const mat = new Matrix(2, 3);
  mat.set(0, 0, 0);
  mat.set(0, 1, 1);
  mat.set(0, 2, 2);
  mat.set(1, 0, 3);
  mat.set(1, 1, 4);
  mat.set(1, 2, 5);
  return expect([
    [0, 1, 2],
    [3, 4, 5],
  ]).toStrictEqual(mat.toArrayOfArrays());
});

test("matrix rotations", () => {
  const mat = Matrix.rot2D(Math.PI / 2);
  const expected = Matrix.fromArrayOfArrays([
    [0, -1],
    [1, 0],
  ]);
  return expect(mat.at(0, 0)).toBeCloseTo(expected.at(0, 0));
});
