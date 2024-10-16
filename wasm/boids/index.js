//@ts-check
import init, {initBoids, getPositions, requestFrame} from "./pkg/wasm_miniexample.js";

async function run() {
  await init();
  initBoids();

  const arr = getPositions();

  console.log({x: arr[0], y: arr[1]});
  requestFrame(1/60);
  console.log({x: arr[0], y: arr[1]});
}

run();