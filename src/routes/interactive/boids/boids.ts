// https://people.ece.cornell.edu/land/courses/ece4760/labs/s2021/Boids/Boids.html
import { CircleCollider, OrthogonalRectangleCollider, type ConcreteCollider } from "$lib/math/colliders";
import { Quadtree } from "$lib/math/quadtree";
import { Vector2 } from "three";

type BoidsSprite = any;

interface BoidsParamsArg {
  maxSpeed?: number;
  minSpeed?: number;
  neighborRange?: number;
  protectedRange?: number;
  obstacleRange?: number;
  centeringFactor?: number;
  avoidFactor?: number;
  matchingFactor?: number;
  turnFactor?: number;
}

interface BoidsParams {
  maxSpeed: number;
  minSpeed: number;
  neighborRange: number;
  protectedRange: number;
  obstacleRange: number;
  cohesionFactor: number;
  separationFactor: number;
  alignmentFactor: number;
  turnFactor: number;
}
const DEFAULT_PARAMS: BoidsParams = {
  maxSpeed: 3,
  minSpeed: 2,
  neighborRange: 20,
  protectedRange: 2,
  obstacleRange: 50,
  cohesionFactor: 0.0005,
  separationFactor: 0.05,
  alignmentFactor: 0.05,
  turnFactor: 0.2
};


class Boids {
  private tooCloseBBox;
  private neighborsBBox;
  private position;
  private heading;
  private futureHeading;
  private params: BoidsParams;
  public id: number;

  constructor(id: number, position: Vector2, heading: Vector2, params: BoidsParamsArg = {}) {
    this.id = id;
    this.position = position;
    this.heading = heading;
    this.futureHeading = heading;
    this.params = {...DEFAULT_PARAMS, ...params};
    this.tooCloseBBox = new CircleCollider(position, this.params.protectedRange);
    this.neighborsBBox = new CircleCollider(position, this.params.neighborRange);
  }

  move() {
    this.heading = this.futureHeading.clampLength(this.params.minSpeed, this.params.maxSpeed);
    this.position.add(this.heading);
    this.tooCloseBBox.center = this.position;
    this.neighborsBBox.center = this.position;
  }

  getNewHeading(world: World) {
    this.futureHeading.set(0, 0);

    let tooClose = world.boidsQt.query(this.tooCloseBBox);
    let neighbors = world.boidsQt.query(this.neighborsBBox);

    // Separation
    let closeVec = new Vector2(0, 0);

    tooClose.forEach((other) => {
      closeVec.add(this.position).sub(other.position);
    });

    // Alignment
    let neighborsAvgHeading = new Vector2(0, 0);
    if (neighbors.length > 0) {
      neighbors.forEach((other) => {
        neighborsAvgHeading.add(other.heading);
      });
      neighborsAvgHeading.divideScalar(neighbors.length);
    }

    // Cohesion
    let neighborsAvgPosition = new Vector2(0, 0);
    if (neighbors.length > 0) {
      neighbors.forEach((other) => {
        neighborsAvgPosition.add(other.position);
      });
      neighborsAvgPosition.divideScalar(neighbors.length);
    }
    
    // Dodge obstacles
    //   Edges
    let turning = new Vector2(0, 0);

    if (
      this.position.x <
      world.worldArea.leftX() + this.params.obstacleRange
    ) {
      turning.x += this.params.turnFactor;
    }

    if (
      this.position.x >
      world.worldArea.rightX() - this.params.obstacleRange
    ) {
      turning.x -= this.params.turnFactor;
    }

    if (
      this.position.y <
      world.worldArea.topY() + this.params.obstacleRange
    ) {
      turning.y += this.params.turnFactor;
    }

    if (
      this.position.y >
      world.worldArea.bottomY() - this.params.obstacleRange
    ) {
      turning.y -= this.params.turnFactor;
    }

    //   Obstacles
    world.obstacles.forEach((obstacle) => {
      let distance = obstacle.sqDistanceToPoint(this.position);
      if (distance < 50) {
        // TODO: make it turn and dodge the obstacle.
      }
    })

    // Apply the change
    this.futureHeading.addScaledVector(closeVec, this.params.separationFactor); // Separation
    this.futureHeading.addScaledVector(neighborsAvgHeading, this.params.alignmentFactor); // Alignment
    this.futureHeading.addScaledVector(neighborsAvgPosition, this.params.cohesionFactor); // Cohesion
    this.futureHeading.addScaledVector(turning, this.params.turnFactor) // Obstacle avoidance

    this.futureHeading.clampLength(this.params.minSpeed, this.params.maxSpeed);
  }

  public getPosition() {
    return this.position
  }

  public updateParams(params: BoidsParamsArg) {
    if (params.neighborRange) {
      this.neighborsBBox.radius = params.neighborRange
    }
    if (params.protectedRange) {
      this.tooCloseBBox.radius = params.protectedRange
    }
    this.params = {...this.params, ...params};
  }
}

class World {
  readonly QT_CAPACITY = 3;
  public boidsQt: Quadtree<Boids>;
  public boidsSprites: BoidsSprite[] = [];
  public worldArea: OrthogonalRectangleCollider;
  obstacles: ConcreteCollider[] = [];
  curId = 0;

  constructor(worldArea: OrthogonalRectangleCollider) {
    this.worldArea = worldArea;
    this.boidsQt = new Quadtree<Boids>(
      worldArea,
      (b) => b.getPosition(),
      this.QT_CAPACITY,
    );
  }

  public addBoid(position: Vector2, heading: Vector2) {
    let boid = new Boids(this.curId++, position, heading);
    // TODO:
    // let boidSprite = new ...;
    // this.boidsSprites.push(boidSprite);
    this.boidsQt.push(boid);
  }

  updateHeadings() {
    this.boidsQt.queryAll().forEach((b) => {
      b.getNewHeading(this);
    });
  }

  move() {
    // TODO: optimize this instead of making a new quadtree every iteration.
    let newQt = new Quadtree(
      this.worldArea,
      (b: Boids) => b.getPosition(),
      this.QT_CAPACITY,
    );

    this.boidsQt.queryAll().forEach((b) => {
      b.move();
      newQt.push(b);
      // TODO:
      // this.boidsSprites[b.id].updatePositionAndRotation()
    });

    this.boidsQt = newQt;
  }

  public update() {
    this.updateHeadings();
    this.move();
  }
}