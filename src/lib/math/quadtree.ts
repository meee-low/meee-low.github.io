import { assertNever } from "$lib/utils";
import {
  OrthogonalRectangleCollider,
  type ConcreteCollider,
  type Point,
} from "./colliders";

interface Quadrants<T> {
  ne: Quadtree<T>;
  nw: Quadtree<T>;
  se: Quadtree<T>;
  sw: Quadtree<T>;
}

export class Quadtree<T> {
  elements: T[] = [];
  subdivisions: Quadrants<T> | undefined = undefined;
  private readonly accessCoordinate: (element: T) => Point;
  private readonly capacity: number;
  private readonly boundaryBox: OrthogonalRectangleCollider;

  constructor(
    boundaryBox: OrthogonalRectangleCollider,
    accessCoordinatesFunc: (element: T) => Point,
    capacity: number,
  ) {
    this.accessCoordinate = accessCoordinatesFunc;
    this.capacity = capacity;
    this.boundaryBox = boundaryBox;
  }

  subdivide(): void {
    let bBoxes: OrthogonalRectangleCollider[] = [];

    const halfWidth = this.boundaryBox.width / 2;
    const halfHeight = this.boundaryBox.height / 2;

    for (let i = -1 / 2; i <= 1 / 2; i += 1) {
      const cy = this.boundaryBox.centerY + i * this.boundaryBox.height;
      for (let j = -1 / 2; j <= 1 / 2; j += 1) {
        const cx = this.boundaryBox.centerX + j * this.boundaryBox.width;
        const bbox = new OrthogonalRectangleCollider(
          cx,
          cy,
          halfWidth,
          halfHeight,
        );
        bBoxes.push(bbox);
      }
    }

    this.subdivisions = {
      nw: new Quadtree(bBoxes[0], this.accessCoordinate, this.capacity),
      ne: new Quadtree(bBoxes[1], this.accessCoordinate, this.capacity),
      sw: new Quadtree(bBoxes[2], this.accessCoordinate, this.capacity),
      se: new Quadtree(bBoxes[3], this.accessCoordinate, this.capacity),
    };
  }

  /**
   * Add the element to the quadtree.
   *
   * @param newElement The element to be added to the Quadtree
   * @returns Whether it was successfully added.
   */
  public push(newElement: Readonly<T>): boolean {
    const p = this.accessCoordinate(newElement);

    if (!this.boundaryBox.contains(p)) {
      return false;
    }

    // bbox now for sure contains p
    return this.pushUnchecked(newElement);
  }

  /** Assumes that this is the correct quadtree where this point should go. Use carefully.*/
  private pushUnchecked(newElement: Readonly<T>) {
    if (this.elements.length < this.capacity) {
      this.elements.push(newElement);
      return true;
    }
    // now for sure it exceeds capacity, so we must subdivide (if we haven't already) and add it to the respective child
    return this.addToMatchingChild(newElement);
  }

  addToMatchingChild(newElement: Readonly<T>): boolean {
    const p = this.accessCoordinate(newElement);

    if (!this.subdivisions) {
      this.subdivide();
    }

    // Find the right quadrant to add to.
    let quadrant: keyof Quadrants<T>;
    const offsets: [boolean, boolean] = [
      p.x > this.boundaryBox.centerX,
      p.y > this.boundaryBox.centerY,
    ];
    switch (offsets) {
      case [false, false]:
        quadrant = "nw";
        break;
      case [true, false]:
        quadrant = "ne";
        break;
      case [false, true]:
        quadrant = "sw";
        break;
      case [true, true]:
        quadrant = "se";
        break;
      default:
        throw new Error("This should never happen.");
    }
    return this.subdivisions![quadrant].pushUnchecked(newElement);
  }

  public query(collider: Readonly<ConcreteCollider>): T[] {
    let result: T[] = [];
    return this.queryImpl(collider, result);
  }

  queryImpl(collider: Readonly<ConcreteCollider>, acc: T[]): T[] {
    if (!collider.intersects(this.boundaryBox)) {
      return acc;
    }

    // push the ones inside this qtree
    for (const el of this.elements) {
      if (collider.contains(this.accessCoordinate(el))) {
        acc.push(el);
      }
    }

    // recurse through the subdivisions
    if (this.subdivisions) {
      for (const sub of Object.values(this.subdivisions)) {
        sub.queryImpl(collider, acc);
      }
    }

    return acc;
  }
}
