import { writable, type Writable } from "svelte/store";

export interface BoidsParams {
  maxSpeed: number;
  minSpeed: number;
  neighborRange: number;
  protectedRange: number;
  obstacleRange: number;
  cohesionFactor: number;
  separationFactor: number;
  alignmentFactor: number;
  turnFactor: number;
  speedScale: number;
}

export const DEFAULT_BOIDS_PARAMS: BoidsParams = {
  maxSpeed: 3,
  minSpeed: 2,
  neighborRange: 20,
  protectedRange: 2.5,
  obstacleRange: 50,
  cohesionFactor: 0.0005,
  separationFactor: 0.05,
  alignmentFactor: 0.05,
  turnFactor: 0.25,
  speedScale: 1,
};
export const SpatialStructures = {
  array: 0,
  quadtree: 1,
} as const;

interface WorldParams {
  numberOfBoids: number;
  spatialStructure: keyof typeof SpatialStructures;
  quadtreeCapacity: number;
}

export type ControlParams = BoidsParams & WorldParams;

export const DEFAULT_CONTROL_PARAMS: ControlParams = {
  ...DEFAULT_BOIDS_PARAMS,
  numberOfBoids: 300,
  spatialStructure: "quadtree",
  quadtreeCapacity: 20,
};

export let controlParams: Writable<ControlParams> = writable({
  ...DEFAULT_CONTROL_PARAMS,
});
