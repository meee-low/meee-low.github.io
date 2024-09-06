import { assertNever } from "$lib/utils";

export interface Point {
  x: number;
  y: number;
}

function squareDistanceBetweenPoints(p1: Point, p2: Point): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return dx * dx + dy * dy;
}

/**
 * A 2D Collider abstract class.
 *
 *
 */
abstract class Collider2D {
  /**
   * Checks if the point is in the collider. Should include the boundaries.
   *
   * @param point The point that we want to check if this collider contains.
   */
  public abstract contains(point: Point): boolean;
  /**
   * Checks if the other collider and this collider overlaps (have points in common). Should includes boundaries.
   *
   * @param other
   */
  public abstract intersects(other: ConcreteCollider): boolean;
}

export type ConcreteCollider = OrthogonalRectangleCollider | CircleCollider;

/**
 * A Rectangle Collider.
 *
 * This class assumes the Y axis grows down. That is, the "top" of the y boundary is less than the the bottom of the y boundary.
 * Also, the rectangle's are parallel to the axes.
 */
export class OrthogonalRectangleCollider extends Collider2D {
  centerX: number;
  centerY: number;
  width: number;
  height: number;
  constructor(centerX: number, centerY: number, width: number, height: number) {
    super();
    this.centerX = centerX;
    this.centerY = centerY;
    this.width = width;
    this.height = height;
  }

  public static fromTopLeft(
    topLeftX: number,
    topLeftY: number,
    width: number,
    height: number,
  ): OrthogonalRectangleCollider {
    return new OrthogonalRectangleCollider(
      topLeftX + width / 2,
      topLeftY + height / 2,
      width,
      height,
    );
  }

  leftX() {
    return this.centerX - this.width / 2;
  }

  rightX() {
    return this.centerX + this.width / 2;
  }

  topY() {
    return this.centerX - this.width / 2;
  }

  bottomY() {
    return this.centerX - this.width / 2;
  }

  contains(point: Point): boolean {
    const x = point.x;
    const y = point.y;
    return (
      this.leftX() <= x &&
      this.rightX() >= x &&
      this.topY() <= y &&
      this.bottomY() >= y
    );
  }

  intersects(other: ConcreteCollider): boolean {
    if (other instanceof OrthogonalRectangleCollider) {
      const doesntIntersect =
        this.leftX() > other.rightX() ||
        other.leftX() < this.rightX() ||
        this.topY() > other.bottomY() ||
        other.topY() > this.bottomY();
      return !doesntIntersect;
    }
    if (other instanceof CircleCollider) {
      if (this.contains(other.center)) {
        return true;
      }
      const closestPoint = {
        x: Math.max(this.leftX(), Math.min(this.rightX(), other.center.x)),
        y: Math.max(this.topY(), Math.min(this.bottomY(), other.center.y)),
      };

      return (
        squareDistanceBetweenPoints(other.center, closestPoint) <
        other.radius * other.radius
      );
    }
    assertNever(other);
  }
}

export class CircleCollider extends Collider2D {
  center: Point;
  radius: number;

  constructor(center: Point, radius: number) {
    super();
    this.center = center;
    this.radius = radius;
  }

  public contains(point: Point): boolean {
    return (
      squareDistanceBetweenPoints(this.center, point) <
      this.radius * this.radius
    );
  }

  public intersects(other: ConcreteCollider): boolean {
    if (other instanceof CircleCollider) {
      const combinedRadius = this.radius + other.radius;
      const sqCombinedRadius = combinedRadius * combinedRadius;
      const sqDistance = squareDistanceBetweenPoints(this.center, other.center);
      return sqDistance < sqCombinedRadius;
    }
    if (other instanceof OrthogonalRectangleCollider) {
      return other.intersects(this);
    }
    assertNever(other);
  }
}
