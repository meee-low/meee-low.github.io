import { test, expect } from "vitest";
import { Quadtree } from "./quadtree";
import { OrthogonalRectangleCollider, type Point } from "./colliders";

function makePoint(x: number, y: number) {
  return { x, y };
}

test("", () => {
  const rect = new OrthogonalRectangleCollider(16, 16, 32, 32);
  const qt = new Quadtree(rect, (p: Point) => p, 3);
  const points = [];
  for (let i = 0; i < 32; i += 2) {
    const success = points.push(makePoint(i, 16));
    if (!success) {
      throw new Error("Couldn't push to the qtree");
    }
  }

  const pBox = new OrthogonalRectangleCollider(points[5].x, points[5].y, 4, 4);
  const res = qt.query(pBox);
  expect(res.length).toStrictEqual(5);
});

test("quadtree: can push into", () => {
  const rect = new OrthogonalRectangleCollider(16, 16, 32, 32);
  const qt = new Quadtree(rect, (p: Point) => p, 3);
  const success = qt.push({ x: 16, y: 16 });
  expect(success).toBeTruthy();
});

test("quadtree: can push into multiple times", () => {
  const rect = new OrthogonalRectangleCollider(16, 16, 32, 32);
  const qt = new Quadtree(rect, (p: Point) => p, 1);
  const success1 = qt.push({ x: 16, y: 16 });
  const success2 = qt.push({ x: 10, y: 10 });
  const success3 = qt.push({ x: 9, y: 8 });
  expect(success1 && success2 && success3).toBeTruthy();
});

test("quadtree: can find element", () => {
  const rect = new OrthogonalRectangleCollider(16, 16, 32, 32);
  const qt = new Quadtree(rect, (p: Point) => p, 1);
  const limit = 4;
  const p = { x: 16, y: 16 }
  let results = []
  for (let i = 0; i < limit; ++i) {
    let res = qt.push(p);
    results.push(res);
  }
  const pBox = new OrthogonalRectangleCollider(p.x, p.y, 2, 2)
  const res = qt.query(pBox)
  if (!results.every((s)=>s)) {
    throw new Error("Failed to add something;")
  }
  console.log(qt);
  expect(res.length).toStrictEqual(limit);
});
