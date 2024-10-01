<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import * as THREE from "three";
  import { World, makeTriangleGeometry } from "./boids";
  import {
    threejs2dInit,
    threejsAnimate,
  } from "$lib/threejs/threejs_boiler_plate";
  import BoidsControls from "./BoidsControls.svelte";
  import FpsCounter from "$lib/threejs/FPSCounter.svelte";
  import { type Writable } from "svelte/store";
  import { type ControlParams, controlParams } from "./controls_store";

  let canvas: HTMLCanvasElement;
  let camera: THREE.OrthographicCamera;
  let renderer: THREE.Renderer;
  let scene: THREE.Scene;
  let clock: THREE.Clock;

  let fpsCounter: FpsCounter;

  const startingNumberOfBoids = $controlParams.numberOfBoids;

  let width: number;
  let height: number;
  let world: World;

  onMount(() => {
    width = 800;
    height = 600;
    try {
      ({ camera, renderer, scene } = threejs2dInit(width, height, canvas, 2));
    } catch (e) {
      window.alert(
        `ERROR: Could not start the ThreeJS WebGL Canvas: \n  '${e}' \n\nMaybe try a different browser or check your settings.`,
      );
      return;
    }
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
    for (let i = 0; i < startingNumberOfBoids; ++i) {
      let x = Math.random() * (camera.right - camera.left) + camera.left;
      let y = Math.random() * (camera.top - camera.bottom) + camera.bottom;
      let v = new THREE.Vector2(x, y);
      world.addBoid(v, new THREE.Vector2(Math.random(), Math.random()));
    }
    scene.add(...world.boidsSprites);

    clock = new THREE.Clock();

    controlParams.subscribe((v) => {
      console.log(v);
      const needsSceneUpdate = world.updateParams(v);
      if (needsSceneUpdate) {
        scene.clear();
        scene.add(...world.getSprites());
      }
    });

    const animate = threejsAnimate(
      (p: {
        scene: THREE.Scene;
        camera: THREE.OrthographicCamera;
        renderer: THREE.Renderer;
        deltatime: number;
      }) => {
        if (p.deltatime > 0) {
          // console.log(p.deltatime);
          fpsCounter.pushDeltatime(p.deltatime);
          world.update(Math.min(p.deltatime, 1 / 15));
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

<div class="md:grid md:grid-cols-12 md:gap-2">
  <div class="relative overflow-auto md:col-span-6 lg:col-span-8">
    <div class="absolute z-10 select-none text-white">
      <FpsCounter bind:this={fpsCounter}></FpsCounter>
    </div>
    <canvas bind:this={canvas}> </canvas>
  </div>
  <div class="md:col-span-6 lg:col-span-4">
    <BoidsControls></BoidsControls>
  </div>
</div>
