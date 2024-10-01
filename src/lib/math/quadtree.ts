import {
  OrthogonalRectangleCollider,
  type ConcreteCollider,
  type Point,
} from "./colliders";

export abstract class SpatialContainer<T> {
  public abstract push(element: T): void;
  public abstract query(boundaryBox: Readonly<ConcreteCollider>): T[];
  public abstract queryAll(): T[];
  public abstract rebalance(parent?: typeof this): void;
}

export class BasicSpatialContainer<T> extends SpatialContainer<T> {
  elements: T[] = [];
  accessFunc: (el: T) => Point;
  constructor(accessFunc: (el: T) => Point) {
    super();
    this.accessFunc = accessFunc;
  }
  public push(element: T): void {
    this.elements.push(element);
  }
  public query(boundaryBox: Readonly<ConcreteCollider>): T[] {
    return this.elements.filter((el) =>
      boundaryBox.contains(this.accessFunc(el)),
    );
  }
  public queryAll(): T[] {
    return this.elements;
  }
  public rebalance(): void {}
}

export class Quadtree2<T> extends SpatialContainer<T> {
  elements: T[] = [];
  accessFunc: (el: T) => Point;
  readonly capacity: number;
  boundaryBox: OrthogonalRectangleCollider;
  subdivisions: Quadrants2<T> | undefined = undefined;

  constructor(
    boundaryBox: OrthogonalRectangleCollider,
    accessCoordinatesFunc: (element: T) => Point,
    capacity: number,
  ) {
    super();
    this.accessFunc = accessCoordinatesFunc;
    // this.capacity = capacity;
    this.capacity = capacity;
    this.boundaryBox = boundaryBox;
  }

  public push(element: T): void {
    if (!this.subdivisions && this.elements.length <= this.capacity) {
      this.elements.push(element);
      return;
    }

    // Else, subdivide:
    this.subdivide();
    const ok = this.pushToChild(element);
    console.assert(
      ok,
      `Error: Could not add this element ${this.accessFunc(element)} to this quadtree ${JSON.stringify(
        {
          left: this.boundaryBox.leftX(),
          right: this.boundaryBox.rightX(),
          top: this.boundaryBox.topY(),
          bottom: this.boundaryBox.bottomY(),
        },
      )}.`,
    );
  }

  protected subdivide() {
    if (typeof this.subdivisions === "undefined") {
      this.subdivisions = {
        ne: new Quadtree2<T>(
          new OrthogonalRectangleCollider(
            (this.boundaryBox.centerX + this.boundaryBox.rightX()) / 2,
            (this.boundaryBox.centerY + this.boundaryBox.topY()) / 2,
            this.boundaryBox.width / 2,
            this.boundaryBox.height / 2,
          ),
          this.accessFunc,
          this.capacity,
        ),
        nw: new Quadtree2<T>(
          new OrthogonalRectangleCollider(
            (this.boundaryBox.centerX + this.boundaryBox.leftX()) / 2,
            (this.boundaryBox.centerY + this.boundaryBox.topY()) / 2,
            this.boundaryBox.width / 2,
            this.boundaryBox.height / 2,
          ),
          this.accessFunc,
          this.capacity,
        ),
        se: new Quadtree2<T>(
          new OrthogonalRectangleCollider(
            (this.boundaryBox.centerX + this.boundaryBox.rightX()) / 2,
            (this.boundaryBox.centerY + this.boundaryBox.bottomY()) / 2,
            this.boundaryBox.width / 2,
            this.boundaryBox.height / 2,
          ),
          this.accessFunc,
          this.capacity,
        ),
        sw: new Quadtree2<T>(
          new OrthogonalRectangleCollider(
            (this.boundaryBox.centerX + this.boundaryBox.leftX()) / 2,
            (this.boundaryBox.centerY + this.boundaryBox.bottomY()) / 2,
            this.boundaryBox.width / 2,
            this.boundaryBox.height / 2,
          ),
          this.accessFunc,
          this.capacity,
        ),
      };
    }
    // Move the elements to the children.
    let allOk = true;
    this.elements.forEach((e) => {
      const ok = this.pushToChild(e);
      allOk = allOk && ok;
    });
    this.elements = [];
    console.assert(allOk, "Could not transfer all the elements to the children.")
  }

  protected pushToChild(element: T): boolean {
    if (this.subdivisions) {
      let toTheLeft = this.accessFunc(element).x < this.boundaryBox.centerX;
      let toTheTop = this.accessFunc(element).y < this.boundaryBox.centerY;

      if (toTheLeft && toTheTop) {
        this.subdivisions.nw.push(element);
        return true;
      } else if (!toTheLeft && toTheTop) {
        this.subdivisions.ne.push(element);
        return true;
      } else if (toTheLeft && !toTheTop) {
        this.subdivisions.sw.push(element);
        return true;
      } else if (!toTheLeft && !toTheTop) {
        this.subdivisions.se.push(element);
        return true;
      } else {
        console.error("Exhaustive check failed while pushing to child. Assumption broken.")
        return false;
      }
    }
    return true;
  }

  public query(boundaryBox: Readonly<ConcreteCollider>): T[] {
    if (!boundaryBox.intersects(this.boundaryBox)) {
      return [];
    }
    let results: T[] = [];

    this.elements
      .filter((el) => boundaryBox.contains(this.accessFunc(el)))
      .forEach((el) => results.push(el));

    if (this.subdivisions) {
      this.subdivisions.ne
        .query(boundaryBox)
        .filter((el) => boundaryBox.contains(this.accessFunc(el)))
        .forEach((el) => results.push(el));

      this.subdivisions.nw
        .query(boundaryBox)
        .filter((el) => boundaryBox.contains(this.accessFunc(el)))
        .forEach((el) => results.push(el));

      this.subdivisions.se
        .query(boundaryBox)
        .filter((el) => boundaryBox.contains(this.accessFunc(el)))
        .forEach((el) => results.push(el));

      this.subdivisions.sw
        .query(boundaryBox)
        .filter((el) => boundaryBox.contains(this.accessFunc(el)))
        .forEach((el) => results.push(el));
    }
    return results;
  }

  public queryAll(): T[] {
    let results: T[] = [];
    this.elements.forEach((el) => results.push(el));

    if (this.subdivisions) {
      this.subdivisions.ne.queryAll().forEach((el) => results.push(el));
      this.subdivisions.nw.queryAll().forEach((el) => results.push(el));
      this.subdivisions.se.queryAll().forEach((el) => results.push(el));
      this.subdivisions.sw.queryAll().forEach((el) => results.push(el));
    }
    return results;
  }

  public rebalance(parent?: Quadtree2<T>): void {
    let par = parent ?? this;
    this.elements.forEach((el, i) => {
      if (!this.boundaryBox.contains(this.accessFunc(el))) {
        this.elements.splice(i, 1);
        par.push(el);
      }
    });

    if (this.subdivisions) {
      this.subdivisions.ne.rebalance(par);
      this.subdivisions.nw.rebalance(par);
      this.subdivisions.se.rebalance(par);
      this.subdivisions.sw.rebalance(par);
    }

    if (this.subdivisions) {
      // Trim irrelevant subdivisions.
      // A subdivision is irrelevant if it has no actual child elements and if its subdivisions are the end-node of the tree.
      // Some other criterium could be used but I think this is a good tradeoff between accuracy and speed.
      let subs = [
        this.subdivisions.ne,
        this.subdivisions.nw,
        this.subdivisions.se,
        this.subdivisions.sw,
      ];
      let childs = subs.reduce((acc, el) => acc + el.elements.length, 0);
      let subsAreUndivided = subs.every(
        (s) => typeof s.subdivisions === typeof undefined,
      );
      if (childs === 0 && subsAreUndivided) {
        this.subdivisions = undefined;
      }
    }
  }
}

interface Quadrants2<T> {
  ne: Quadtree2<T>;
  nw: Quadtree2<T>;
  se: Quadtree2<T>;
  sw: Quadtree2<T>;
}

interface Quadrants<T> {
  ne: Quadtree<T>;
  nw: Quadtree<T>;
  se: Quadtree<T>;
  sw: Quadtree<T>;
}

export class Quadtree<T> extends SpatialContainer<T> {
  private elements: T[] = [];
  private subdivisions: Quadrants<T> | undefined = undefined;
  private readonly accessCoordinate: (element: T) => Point;
  private readonly capacity: number;
  private readonly boundaryBox: OrthogonalRectangleCollider;

  constructor(
    boundaryBox: OrthogonalRectangleCollider,
    accessCoordinatesFunc: (element: T) => Point,
    capacity: number,
  ) {
    super();
    this.accessCoordinate = accessCoordinatesFunc;
    this.capacity = capacity;
    this.boundaryBox = boundaryBox;
  }

  subdivide(): void {
    let bBoxes: OrthogonalRectangleCollider[] = [];

    const halfWidth = this.boundaryBox.width / 2;
    const halfHeight = this.boundaryBox.height / 2;

    console.log("Subdividing...");

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
        console.log({ cx, cy });
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
    if (offsets[0] === false && offsets[1] === false) {
      quadrant = "nw";
    } else if (offsets[0] === true && offsets[1] === false) {
      quadrant = "ne";
    } else if (offsets[0] === false && offsets[1] === true) {
      quadrant = "sw";
    } else if (offsets[0] === true && offsets[1] === true) {
      quadrant = "se";
    } else {
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
      console.log(
        "tried to find it in this qtree but it doesn't intersect with the collider",
      );
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
        sub as Quadtree<T>;
        acc = [...acc, ...sub.queryImpl(collider, acc)];
      }
    }

    return acc;
  }

  /** Returns a list of all the elements inside this and its children. */
  public queryAll() {
    return this.query(this.boundaryBox);
  }

  public rebalance(parent?: Quadtree<T>): void {
    const par = parent ?? this;
    this.elements.forEach((v, i) => {
      if (!this.boundaryBox.contains(this.accessCoordinate(v))) {
        this.elements.splice(i, 1);
        if (par !== this) {
          par.push(v);
        }
      }
    });
    if (this.subdivisions) {
      this.subdivisions.ne.rebalance(par);
      this.subdivisions.se.rebalance(par);
      this.subdivisions.nw.rebalance(par);
      this.subdivisions.sw.rebalance(par);
    }
  }
}
