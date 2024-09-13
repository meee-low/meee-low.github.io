// https://people.ece.cornell.edu/land/courses/ece4760/labs/s2021/Boids/Boids.html
import {
  CircleCollider,
  OrthogonalRectangleCollider,
  type ConcreteCollider,
} from "$lib/math/colliders";
import { Matrix } from "$lib/math/linalg";
import { Quadtree } from "$lib/math/quadtree";
import { Vector2 } from "three";
import * as THREE from "three";

type BoidsSprite = THREE.Mesh;

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
  turnFactor: 0.2,
};

export class Boids {
  private tooCloseBBox;
  private neighborsBBox;
  private position;
  private heading;
  private futureHeading;
  private params: BoidsParams;
  public id: number;

  constructor(
    id: number,
    position: Vector2,
    heading: Vector2,
    params: BoidsParamsArg = {},
  ) {
    this.id = id;
    this.position = position;
    this.heading = heading;
    this.futureHeading = heading;
    this.params = { ...DEFAULT_PARAMS, ...params };
    this.tooCloseBBox = new CircleCollider(
      position,
      this.params.protectedRange,
    );
    this.neighborsBBox = new CircleCollider(
      position,
      this.params.neighborRange,
    );
  }

  move() {
    this.heading = this.futureHeading.clampLength(
      this.params.minSpeed,
      this.params.maxSpeed,
    );
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

    if (this.position.x < world.worldArea.leftX() + this.params.obstacleRange) {
      turning.x += this.params.turnFactor;
    }

    if (
      this.position.x >
      world.worldArea.rightX() - this.params.obstacleRange
    ) {
      turning.x -= this.params.turnFactor;
    }

    if (this.position.y < world.worldArea.topY() + this.params.obstacleRange) {
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
    });

    // Apply the change
    this.futureHeading.addScaledVector(closeVec, this.params.separationFactor); // Separation
    this.futureHeading.addScaledVector(
      neighborsAvgHeading,
      this.params.alignmentFactor,
    ); // Alignment
    this.futureHeading.addScaledVector(
      neighborsAvgPosition,
      this.params.cohesionFactor,
    ); // Cohesion
    this.futureHeading.addScaledVector(turning, this.params.turnFactor); // Obstacle avoidance

    this.futureHeading.clampLength(this.params.minSpeed, this.params.maxSpeed);
  }

  public getPosition() {
    return this.position;
  }

  public updateParams(params: BoidsParamsArg) {
    if (params.neighborRange) {
      this.neighborsBBox.radius = params.neighborRange;
    }
    if (params.protectedRange) {
      this.tooCloseBBox.radius = params.protectedRange;
    }
    this.params = { ...this.params, ...params };
  }
}

export class World {
  readonly QT_CAPACITY = 3;
  public boidsQt: Quadtree<Boids>;
  public boidsSprites: BoidsSprite[] = [];
  public worldArea: OrthogonalRectangleCollider;
  obstacles: ConcreteCollider[] = [];
  curId = 0;

  constructor(centerX: number, centerY: number, width: number, height: number) {
    this.worldArea = new OrthogonalRectangleCollider(
      centerX,
      centerY,
      width,
      height,
    );
    this.boidsQt = new Quadtree<Boids>(
      this.worldArea,
      (b) => b.getPosition(),
      this.QT_CAPACITY,
    );
  }

  public addBoid(position: Vector2, heading: Vector2) {
    let boid = new Boids(this.curId++, position, heading);
    this.boidsQt.push(boid);

    // visuals:
    let geom = makeTriangleGeometry(position, heading);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    let boidSprite = new THREE.Mesh(geom, material);
    boidSprite.position.x = position.x;
    boidSprite.position.y = position.y;
    boidSprite.rotateZ(heading.angle());
    this.boidsSprites.push(boidSprite);
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

    // console.log(this.boidsQt.queryAll().length);

    this.boidsQt.queryAll().forEach((b) => {
      b.move();
      newQt.push(b);
      this.boidsSprites[b.id].position.x = b.getPosition().x;
      this.boidsSprites[b.id].position.y = b.getPosition().y;
      // TODO: rotation

      console.log({
        id: b.id,
        position: { x: b.getPosition().x, y: b.getPosition().y },
      });
    });

    this.boidsQt = newQt;
  }

  public update() {
    this.updateHeadings();
    this.move();
  }
}

export function makeTriangleGeometry(
  position: THREE.Vector2Like,
  heading: THREE.Vector2Like,
): THREE.ShapeGeometry {
  let shape = new THREE.Shape();

  // const { x, y } = position;
  const x = 0;
  const y = 0;
  const cos30 = Math.cos(Math.PI / 6);
  let v1 = new Vector2(x, y + 1);
  let v2 = new Vector2(x - cos30, y - 2);
  let v3 = new Vector2(x + cos30, y - 2);

  // let rotM = Matrix.rot2D(heading.angle());
  //
  // rotM.transformVec2(v1);
  // rotM.transformVec2(v2);
  // rotM.transformVec2(v3);

  shape.moveTo(v1.x, v1.y);
  shape.lineTo(v2.x, v2.y);
  shape.lineTo(v3.x, v3.y);

  return new THREE.ShapeGeometry(shape);
}

