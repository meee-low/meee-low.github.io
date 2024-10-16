mod boids;
use boids::*;

use rand::prelude::*;
use std::cell::RefCell;
use wasm_bindgen::prelude::*;

const STARTING_NUMBER_OF_BOIDS: usize = 500;

thread_local! {
    static POSITIONS_BUFFER: RefCell<Vec<f32>> = const {RefCell::new(Vec::new())};
    static BOIDS_WORLD: RefCell<Option<BoidWorld>> = const { RefCell::new(None) };
}

#[wasm_bindgen]
extern "C" {
    // Importing `console.log` for debugging purposes
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn debug(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn error(s: &str);
}

#[wasm_bindgen(js_name=initBoids)]
pub fn init_boids() {
    let position_wrapper = PositionWrapper {
        push_coord: |x, y| {
            POSITIONS_BUFFER.with_borrow_mut(|buf| {
                buf.push(x);
                buf.push(y)
            })
        },
        set: |id, x, y| {
            POSITIONS_BUFFER.with_borrow_mut(|buf| {
                buf[id * 2] = x;
                buf[id * 2 + 1] = y;
            })
        },
        get: |id| POSITIONS_BUFFER.with_borrow(|buf| Vector2D::new(buf[id * 2], buf[id * 2 + 1])),
        truncate: |quantity| POSITIONS_BUFFER.with_borrow_mut(|buf| buf.truncate(quantity * 2)),
        debug: |f| write!(f, "{:?}", POSITIONS_BUFFER.with_borrow(|buf| buf.clone())),
    };

    let mut world = BoidWorld::new_with_position_wrapper_and_params(
        position_wrapper,
        BoidParams::new_with_default_params(),
    );
    // change_quantity_of_boids(STARTING_NUMBER_OF_BOIDS);
    let mut rng = thread_rng();
    world.populate(STARTING_NUMBER_OF_BOIDS, &mut rng);
    // debug("Finished initializing.");
    // debug(&format!("Length of the array: {}", POSITIONS_BUFFER.with_borrow(|b| b.len())));
    // debug(&format!("{:?}", world));
    BOIDS_WORLD.replace(Some(world));
}

#[wasm_bindgen(js_name=getPositions)]
pub fn view_positions() -> js_sys::Float32Array {
    let (ptr, len) = POSITIONS_BUFFER.with_borrow_mut(|buf| (buf.as_mut_ptr(), buf.len()));
    unsafe { js_sys::Float32Array::view_mut_raw(ptr, len) }
}

#[wasm_bindgen(js_name=requestFrame)]
pub fn request_frame(deltatime: f32) {
    BOIDS_WORLD.with_borrow_mut(|bw| {
        if let Some(bw) = bw {
            bw.update(deltatime)
        }
    });
}

#[wasm_bindgen(js_name=updateBoidsSimParams)]
pub fn update_options(partial_params: JsValue) {
    match serde_wasm_bindgen::from_value(partial_params) {
        Ok(parsed) => {
            BOIDS_WORLD.with_borrow_mut(|bw| {
                if let Some(bw) = bw {
                    bw.params.partial_update(parsed);
                }
            });
        }
        Err(e) => error(&format!("ERROR: Tried to pass invalid params: {}", e)),
    }
}

#[wasm_bindgen(js_name=changeQuantityOfBoids)]
pub fn change_quantity_of_boids(quantity: usize) {
    let mut rng = thread_rng();
    BOIDS_WORLD.with_borrow_mut(|bw| {
        if let Some(bw) = bw {
            bw.populate(quantity, &mut rng);
        }
    });
}
