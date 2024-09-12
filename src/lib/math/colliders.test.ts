import {test, expect} from "vitest"
import { CircleCollider, OrthogonalRectangleCollider } from "./colliders"

test("CircleCollider sqdistance", () => {
  const cc = new CircleCollider({x: 0, y: 0}, 0);
  const p = {x: 10, y: 0};
  return expect(cc.sqDistanceToPoint(p)).toStrictEqual(10 * 10);
})


test("CircleCollider sqdistance", () => {
  const cc = new CircleCollider({x: 0, y: 0}, 0);
  const p = {x: 0, y: 10};
  return expect(cc.sqDistanceToPoint(p)).toStrictEqual(10 * 10);
})

test("CircleCollider sqdistance", () => {
  const cc = new CircleCollider({x: 0, y: 0}, 0);
  const p = {x: 3, y: -4};
  return expect(cc.sqDistanceToPoint(p)).toStrictEqual(5 * 5);
})

test("CircleCollider sqdistance", () => {
  const cc = new CircleCollider({x: 0, y: 0}, 7);
  const p = {x: 6, y: 8};
  return expect(cc.sqDistanceToPoint(p)).toStrictEqual(9);
})


test("OrtRect sqdistance: zero area", () => {
  const rect = new OrthogonalRectangleCollider(0, 0, 0, 0);
  const p = {x: 6, y: 8};
  return expect(rect.sqDistanceToPoint(p)).toStrictEqual(6*6 + 8*8);
})

test("OrtRect sqdistance", () => {
  const rect = new OrthogonalRectangleCollider(0, 0, 2, 2);
  const p = {x: 0, y: 5};
  return expect(rect.sqDistanceToPoint(p)).toStrictEqual(9);
})

test("OrtRect sqdistance", () => {
  const rect = new OrthogonalRectangleCollider(0, 0, 2, 2);
  const p = {x: 5, y: 0};
  return expect(rect.sqDistanceToPoint(p)).toStrictEqual(9);
})
