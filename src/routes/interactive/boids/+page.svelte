<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import * as THREE from "three";
  import { World, makeTriangleGeometry } from "./boids";
  import {
    threejs2dInit,
    threejsAnimate,
  } from "$lib/threejs/threejs_boiler_plate";
  import Controls from "./controls.svelte";

  let canvas: HTMLCanvasElement;
  let camera: THREE.OrthographicCamera;
  let renderer: THREE.Renderer;
  let scene: THREE.Scene;
  let clock: THREE.Clock;

  const numberOfBoids = 200;

  let width: number;
  let height: number;
  let world: World;

  function pixelToWorld(
    x: number,
    y: number,
    width: number,
    height: number,
    camera: THREE.OrthographicCamera,
  ) {
    const aspect = width / height;
    const frustumHeight = camera.top - camera.bottom;
    const frustumWidth = frustumHeight * aspect;

    const worldX = (x / width) * frustumWidth - frustumWidth / 2;
    const worldY = -(y / height) * frustumHeight - frustumHeight / 2;

    return new THREE.Vector2(worldX, worldY);
  }

  onMount(() => {
    width = 1200;
    height = 600;
    ({ camera, renderer, scene } = threejs2dInit(width, height, canvas, 2));
    console.log("camera boundaries: ", {
      top: camera.top,
      bottom: camera.bottom,
      left: camera.left,
      right: camera.right,
    });

    world = new World(
      0,
      0,
      camera.right - camera.left,
      camera.top - camera.bottom,
    );

    // Add the boids to the world
    for (let i = 0; i < numberOfBoids; ++i) {
      let x = Math.random() * (camera.right - camera.left) + camera.left;
      let y = Math.random() * (camera.top - camera.bottom) + camera.bottom;
      let v = new THREE.Vector2(x, y);
      // console.log(v);
      world.addBoid(v, new THREE.Vector2(Math.random(), Math.random()));
    }
    scene.add(...world.boidsSprites);

    clock = new THREE.Clock();
    const animate = threejsAnimate(
      (p: {
        scene: THREE.Scene;
        camera: THREE.OrthographicCamera;
        renderer: THREE.Renderer;
        deltatime: number;
      }) => {
        if (p.deltatime > 0) {
          console.log(p.deltatime);
          world.update(Math.min(p.deltatime, 1/15));
        }
      },
      renderer,
      scene,
      camera,
      clock,
    );

    animate();
  });
  onDestroy(() => {
    if (world) {
      world.destroy();
    }
    if (scene) {
      scene.clear();
    }
    if (clock) {
      clock.stop();
    }
  });
</script>

<div>
  <canvas bind:this={canvas}></canvas>
  <Controls></Controls>
</div>
