<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  let canvas: HTMLCanvasElement;

  onMount(() => {
    let scene = new THREE.Scene();

    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 10;
    let camera = new THREE.OrthographicCamera(
      (-frustumSize * aspect) / 2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      -frustumSize / 2,
      1,
      1000,
    );
    camera.position.z = 10;

    let renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.PlaneGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const rectangle = new THREE.Mesh(geometry, material);
    scene.add(rectangle);

    let speed = 0.01;
    function animate() {
      requestAnimationFrame(animate);

      rectangle.position.x += speed;

      if (
        rectangle.position.x > (window.innerWidth / window.innerHeight) * 5 ||
        rectangle.position.x < -5
      ) {
        speed = -speed;
      }

      renderer.render(scene, camera);
    }

    animate();
  });
</script>

<canvas bind:this={canvas}></canvas>
