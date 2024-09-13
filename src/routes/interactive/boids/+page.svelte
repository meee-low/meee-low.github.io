<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { World, makeTriangleGeometry } from "./boids";
  import {
    threejs2dInit,
    threejsAnimate,
  } from "$lib/threejs/threejs_boiler_plate";

  let canvas: HTMLCanvasElement;
  let camera: THREE.OrthographicCamera;
  let renderer: THREE.Renderer;
  let scene: THREE.Scene;

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
    width = 600;
    height = 400;
    ({ camera, renderer, scene } = threejs2dInit(width, height, canvas));
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

    for (let i = 0; i < 100; ++i) {
      let x = Math.random() * (camera.right - camera.left) + camera.left;
      let y = Math.random() * (camera.top - camera.bottom) + camera.bottom;
      let v = new THREE.Vector2(x, y);
      console.log(v);
      // let worldPos = pixelToWorld(x, y, width, height, camera);
      world.addBoid(v, new THREE.Vector2(Math.random(), Math.random()));
    }
    scene.add(...world.boidsSprites);

    // const triGeom = makeTriangleGeometry({ x: 0, y: 0 }, { x: 0, y: 0 });
    // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    // let boidSprite = new THREE.Mesh(triGeom, material);
    // // boidSprite.position.x = -75;
    // console.log("camera params: ", camera.top);
    // console.log("world pos", boidSprite.getWorldPosition(new THREE.Vector3()));
    // console.log(
    //   "vertex pos",
    //   boidSprite.getVertexPosition(0, new THREE.Vector3()),
    // );
    //
    // scene.add(boidSprite);

    const animate = threejsAnimate(
      (_p: {
        scene: THREE.Scene;
        camera: THREE.OrthographicCamera;
        renderer: THREE.Renderer;
      }) => world.update(),
      renderer,
      scene,
      camera,
    );

    animate();
  });
</script>

<canvas bind:this={canvas}></canvas>
