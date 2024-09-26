// https://people.ece.cornell.edu/land/courses/ece4760/labs/s2021/Boids/Boids.html
import {
  CircleCollider,
  OrthogonalRectangleCollider,
  type ConcreteCollider,
} from "$lib/math/colliders";
import {
  BasicSpatialContainer,
  SpatialContainer,
  Quadtree,
  Quadtree2,
} from "$lib/math/quadtree";
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
  speedScale: number;
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
  turnFactor: 0.25,
  speedScale: 1,
};

type Attractor = {
  position: Vector2;
  attractiveStrength: number;
  inverseDistance: -1 | 1;
};

export class Boids {
  private tooCloseBBox;
  private neighborsBBox;
  private position;
  private heading;
  private futureHeadingOffset;
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
    this.futureHeadingOffset = heading.clone();
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

  /**
   *
   * @param deltatime The deltatime in SECONDS.
   */
  move(deltatime: number) {
    this.heading
      .copy(this.futureHeadingOffset)
      .clampLength(this.params.minSpeed, this.params.maxSpeed)
      .multiplyScalar(this.params.speedScale);

    // this.position.add(this.heading.clone().multiplyScalar(deltatime * 60));
    this.position.addScaledVector(this.heading, deltatime * 60);
    this.tooCloseBBox.center = this.position;
    this.neighborsBBox.center = this.position;
  }

  calculateNewHeading(world: World) {
    this.futureHeadingOffset.copy(this.heading);

    let tooClose = world.boidsQt.query(this.tooCloseBBox);
    let neighbors = world.boidsQt
      .query(this.neighborsBBox)
      .filter((v) => !tooClose.includes(v));

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
    let turning = new Vector2();

    world.obstacles.forEach((attractor) => {
      let dist = this.position.distanceToSquared(attractor.position);
      let mag =
        Math.pow(dist, -attractor.inverseDistance) *
        attractor.attractiveStrength;
      let dir = this.position.clone().sub(attractor.position);
      turning.addScaledVector(dir, -mag);
    });

    // Apply the change
    this.futureHeadingOffset.addScaledVector(
      closeVec,
      this.params.separationFactor,
    ); // Separation
    this.futureHeadingOffset.addScaledVector(
      neighborsAvgHeading,
      this.params.alignmentFactor,
    ); // Alignment
    this.futureHeadingOffset.addScaledVector(
      neighborsAvgPosition,
      this.params.cohesionFactor,
    ); // Cohesion
    this.futureHeadingOffset.add(turning); // Obstacle avoidance

    this.futureHeadingOffset.clampLength(
      this.params.minSpeed,
      this.params.maxSpeed,
    );
  }

  public getPosition() {
    return this.position;
  }

  public getVelocity() {
    return this.heading;
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
  readonly QT_CAPACITY = 50;
  public boidsQt: SpatialContainer<Boids>;
  public boidsSprites: BoidsSprite[] = [];
  public worldArea: OrthogonalRectangleCollider;
  frameCount = 0;
  obstacles: Attractor[] = [];
  curId = 0;

  constructor(centerX: number, centerY: number, width: number, height: number) {
    this.worldArea = new OrthogonalRectangleCollider(
      centerX,
      centerY,
      width * 2,
      height * 2,
    );
    // this.boidsQt = new BasicSpatialContainer((b) => b.getPosition());
    this.boidsQt = new Quadtree2<Boids>(
      this.worldArea,
      (b) => b.getPosition(),
      this.QT_CAPACITY,
    );

    this.addObstacle({
      position: new Vector2(centerX, centerY),
      attractiveStrength: 0.00000006,
      inverseDistance: -1,
    });

    this.addObstacle({
      position: new Vector2(centerX - width / 6, centerY),
      attractiveStrength: -0.000000001,
      inverseDistance: 1,
    });

    this.addObstacle({
      position: new Vector2(centerX + width / 6, centerY),
      attractiveStrength: -0.000000001,
      inverseDistance: 1,
    });
  }

  public addBoid(position: Vector2, heading: Vector2) {
    let boid = new Boids(this.curId++, position, heading);
    this.boidsQt.push(boid);

    // visuals:
    let geom = makeTriangleGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      opacity: 0.6,
      transparent: true,
    });
    let boidSprite = new THREE.Mesh(geom, material);
    boidSprite.position.x = position.x;
    boidSprite.position.y = position.y;
    boidSprite.rotateZ(heading.angle());
    this.boidsSprites.push(boidSprite);
  }

  updateHeadings() {
    this.boidsQt.queryAll().forEach((b) => {
      b.calculateNewHeading(this);
    });
  }

  /**
   *
   * @param deltatime deltatime in SECONDS.
   */
  move(deltatime: number) {
    this.frameCount++;

    this.boidsQt.queryAll().forEach((b) => {
      b.move(deltatime);
      this.boidsSprites[b.id].position.x = b.getPosition().x;
      this.boidsSprites[b.id].position.y = b.getPosition().y;
      // TODO: rotation
      this.boidsSprites[b.id].rotation.z = b.getVelocity().angle();

      // console.log({
      //   id: b.id,
      //   position: { x: b.getPosition().x, y: b.getPosition().y },
      // });
    });
    if (this.frameCount % 180 === 0) {
      let bbs = this.boidsQt.queryAll();
      this.boidsQt = new Quadtree2<Boids>(
        this.worldArea,
        (b) => b.getPosition(),
        this.QT_CAPACITY,
      );

      bbs.forEach((b) => this.boidsQt.push(b));
    } else {
      this.boidsQt.rebalance();
    }
  }

  /**
   *
   * @param deltatime deltatime in SECONDS.
   */
  public update(deltatime: number) {
    this.updateHeadings();
    this.move(deltatime);
  }

  public addObstacle(obstacle: Attractor) {
    this.obstacles.push(obstacle);
  }

  public destroy() {
    this.boidsQt = new BasicSpatialContainer<Boids>((b) => b.getPosition());
    this.boidsSprites = [];
  }
}

export function makeTriangleGeometry(): THREE.ShapeGeometry {
  let shape = new THREE.Shape();

  const leftX = -0.8;
  const sinOfLeft = Math.sin(Math.acos(leftX));

  const scale = 1;
  let v1 = new Vector2(1, 0).multiplyScalar(scale);
  let v2 = new Vector2(leftX, sinOfLeft).multiplyScalar(scale);
  let v3 = new Vector2(leftX, -sinOfLeft).multiplyScalar(scale);

  shape.moveTo(v1.x, v1.y);
  shape.lineTo(v2.x, v2.y);
  shape.lineTo(v3.x, v3.y);

  return new THREE.ShapeGeometry(shape);
}
