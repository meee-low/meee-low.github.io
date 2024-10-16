use super::Coord;
use serde::{Deserialize, Serialize};

#[derive(Debug)]
pub struct BoidParams {
    pub world_width: Coord,
    pub world_height: Coord,
    pub too_close: Coord,
    pub view_range: Coord,
    pub separation_factor: Coord,
    pub alignment_factor: Coord,
    pub cohesion_factor: Coord,
    pub center_pull_factor: Coord,
    pub min_speed: Coord,
    pub max_speed: Coord,
    pub expected_fps: Coord,
    pub turning_rate: Coord,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PartialBoidParams {
    pub world_width: Option<Coord>,
    pub world_height: Option<Coord>,
    pub too_close: Option<Coord>,
    pub view_range: Option<Coord>,
    pub separation_factor: Option<Coord>,
    pub alignment_factor: Option<Coord>,
    pub cohesion_factor: Option<Coord>,
    pub center_pull_factor: Option<Coord>,
    pub min_speed: Option<Coord>,
    pub max_speed: Option<Coord>,
    pub expected_fps: Option<Coord>,
    pub turning_rate: Option<Coord>,
}

impl BoidParams {
    pub const fn new_with_default_params() -> BoidParams {
        BoidParams {
            world_width: 800.0,
            world_height: 800.0,
            too_close: 2.5,
            view_range: 20.0,
            separation_factor: 0.05,
            alignment_factor: 0.05,
            cohesion_factor: 0.0005,
            center_pull_factor: 0.02,
            min_speed: 1.5,
            max_speed: 3.0,
            expected_fps: 60.0,
            turning_rate: 0.5,
        }
    }

    pub fn partial_update(&mut self, partial: PartialBoidParams) {
        if let Some(v) = partial.alignment_factor {
            self.alignment_factor = v;
        }
        if let Some(v) = partial.world_width {
            self.world_width = v;
        }
        if let Some(v) = partial.world_height {
            self.world_height = v;
        }
        if let Some(v) = partial.min_speed {
            self.min_speed = v;
        }
        if let Some(v) = partial.max_speed {
            self.max_speed = v;
        }
        if let Some(v) = partial.too_close {
            self.too_close = v;
        }
        if let Some(v) = partial.view_range {
            self.view_range = v;
        }
        if let Some(v) = partial.separation_factor {
            self.separation_factor = v;
        }
        if let Some(v) = partial.cohesion_factor {
            self.cohesion_factor = v;
        }
        if let Some(v) = partial.center_pull_factor {
            self.center_pull_factor = v;
        }
        if let Some(v) = partial.expected_fps {
            self.expected_fps = v;
        }
        if let Some(v) = partial.turning_rate {
            self.turning_rate = v;
        }
    }
}
