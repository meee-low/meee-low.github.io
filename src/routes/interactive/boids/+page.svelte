<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import * as THREE from "three";
  import {BoidsWrapper} from "./boids_wasm_wrapper";
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

  let width: number;
  let height: number;
  let wasmWrapper: BoidsWrapper;

  onMount(async () => {
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
    // console.log("camera boundaries: ", {
    //   top: camera.top,
    //   bottom: camera.bottom,
    //   left: camera.left,
    //   right: camera.right,
    // });
    // camera.translateX(camera.right);
    // camera.translateY(camera.bottom);
    wasmWrapper = new BoidsWrapper();
    await wasmWrapper.initWasm();
    scene.add(wasmWrapper.sprites);

    clock = new THREE.Clock();

    controlParams.subscribe((v) => {
      // console.log(v);
      wasmWrapper.updateParams(v);
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
          wasmWrapper.update(Math.min(p.deltatime, 1 / 15));
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
