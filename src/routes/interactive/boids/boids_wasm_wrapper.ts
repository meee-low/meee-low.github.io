import * as THREE from "three";
import { Vector2 } from "three";
import init, { getPositions, initBoids, requestFrame, updateBoidsSimParams } from "$lib/wasm/boids/boids";

import {
  type ControlParams,
} from "./controls_store";

export class BoidsWrapper {
  sprites: THREE.Group = new THREE.Group();
  positions: Float32Array | undefined;
  
  constructor() {
  }

  async initWasm() {
    await init();
    initBoids();
    this.positions = getPositions();
  }

  resize(newSize: number) {}

  updateSprites() {
    if (!this.positions) {
      console.error("Tried to update before initiation. Doing nothing.");
      return;
    }
    let boidsQuantity = this.positions.length / 2;
    let spritesQuantity = this.sprites.children.length;
    if (spritesQuantity > boidsQuantity) {
      this.sprites.children = this.sprites.children.slice(0, boidsQuantity);
    } else if (spritesQuantity < boidsQuantity) {
      for (let i = spritesQuantity; i < boidsQuantity; ++i) {
        let x = this.getPositionX(i);
        let y = this.getPositionY(i);
        let heading = this.getAngle(i);

        let tri = makeTriangleGeometry();
        const material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          opacity: 0.6,
          transparent: true,
        });
        let boidSprite = new THREE.Mesh(tri, material);
        boidSprite.position.x = x;
        boidSprite.position.y = y;
        boidSprite.rotateZ(heading.angle());
        this.sprites.add(boidSprite);
      }
    }

    // this.sprites.children.forEach((s, i) => {
    //   let x = this.getPositionX(i);
    //   let y = this.getPositionY(i);
    //   s.position.x = x;
    //   s.position.y = y;
    // });
    this.positions.forEach((v, i) => {
      if (i % 2 == 0 ) {
        this.sprites.children[i / 2].position.x = v;
      } else {
        this.sprites.children[(i-1) / 2].position.y = v;
      }
    })
  }

  private getPositionX(id: number): number {
    if (this.positions) {
      return this.positions[id * 2];
    }
    throw new Error("oops");
  }

  private getPositionY(id: number): number {
    if (this.positions) {
      return this.positions[id * 2 + 1];
    }
    throw new Error("oops");
  }

  private getAngle(id: number): Vector2 {
    return new Vector2(1, 0);
  }

  update(deltatime: number) {
    if (!this.positions) {
      return;
    }
    console.log(this.positions.length, this.sprites.children.length);
    requestFrame(deltatime);
    // this.updateSprites();
  }

  updateParams(boidParams: ControlParams) {
    if (!this.positions) {
      return;
    }
    updateBoidsSimParams(boidParams);
  }
}

function makeTriangleGeometry(): THREE.ShapeGeometry {
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
