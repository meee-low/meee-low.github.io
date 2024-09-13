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
  public abstract contains(point: Readonly<Point>): boolean;
  /**
   * Checks if the other collider and this collider overlaps (have points in common). Should includes boundaries.
   *
   * @param other
   */
  public abstract intersects(other: Readonly<ConcreteCollider>): boolean;

  public abstract closestBoundaryPointToPoint(
    point: Readonly<Point>,
    ret: Point,
  ): void;
  /**
   * Calculates the squared distance from the boundary of this collider to the point.
   */
  public abstract sqDistanceToPoint(point: Readonly<Point>): number;
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
    return this.centerY - this.height / 2;
  }

  bottomY() {
    return this.centerY + this.height / 2;
  }

  debugDirections() {
    return {
      left: this.leftX(),
      right: this.rightX(),
      top: this.topY(),
      bottom: this.bottomY(),
    } as const;
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
        other.leftX() > this.rightX() ||
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

  public closestBoundaryPointToPoint(point: Readonly<Point>, ret: Point): void {
    ret.x = Math.max(this.leftX(), Math.min(point.x, this.rightX()));
    ret.y = Math.max(this.topY(), Math.min(point.y, this.bottomY()));
  }

  public sqDistanceToPoint(point: Readonly<Point>): number {
    const closest = { x: 0, y: 0 };
    this.closestBoundaryPointToPoint(point, closest);
    const dx = point.x - closest.x;
    const dy = point.y - closest.y;
    return dx * dx + dy * dy;
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

  public closestBoundaryPointToPoint(point: Readonly<Point>, ret: Point): void {
    const dx = point.x - this.center.x;
    const dy = point.y - this.center.y;
    const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
    if (distanceFromCenter <= 0.0001) {
      // distance is 0 so it's too close to the center to determine the boundary.
      ret.x = this.center.x;
      ret.y = this.center.y;
    }
    const scaleFactor = this.radius / distanceFromCenter;
    // scale it to go to the radius:
    ret.x = this.center.x + point.x * scaleFactor;
    ret.y = this.center.y + point.y * scaleFactor;
    return;
  }

  public sqDistanceToPoint(point: Readonly<Point>): number {
    const dx = point.x - this.center.x;
    const dy = point.y - this.center.y;
    const sqDistanceFromCenter = dx * dx + dy * dy;
    return Math.pow(Math.sqrt(sqDistanceFromCenter) - this.radius, 2);
  }
}
