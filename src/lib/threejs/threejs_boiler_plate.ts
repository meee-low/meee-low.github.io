import * as THREE from "three";

export function threejs2dInit(
  width: number,
  height: number,
  canvas: HTMLCanvasElement,
  frustumFactor: number = 2,
): {
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera;
  renderer: THREE.Renderer;
} {
  let scene = new THREE.Scene();

  const aspect = width / height;
  const frustumSize = height / frustumFactor;
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
  renderer.setSize(width, height);

  return { scene, camera, renderer };
}

export function threejsAnimate<CameraT extends THREE.Camera>(
  updateCallback: (threejsParams: {
    scene: THREE.Scene;
    camera: CameraT;
    renderer: THREE.Renderer;
  }) => void,
  renderer: THREE.Renderer,
  scene: THREE.Scene,
  camera: CameraT,
) {
  const animate = () => {
    requestAnimationFrame(animate);

    updateCallback({ camera, scene, renderer });

    renderer.render(scene, camera);
  };
  return animate;
}
