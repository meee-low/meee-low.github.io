<script lang="ts">
  import NumericSlider from "$lib/components/NumericSlider.svelte";
  import { propertyStore } from "svelte-writable-derived";
  import { controlParams } from "./controls_store";
</script>

<div>
  <select
    bind:value={$controlParams.spatialStructure}
    class="rounded-sm border border-black"
    name="spatial-structure"
    id="spatial-structure"
  >
    <option value="array">Array</option>
    <option value="quadtree" selected>Quadtree</option>
  </select>

  <NumericSlider
    {...{
      label: "numberOfBoids",
      min: 0,
      max: 1000,
      step: 1,
      value: propertyStore(controlParams, "numberOfBoids"),
    }}
  ></NumericSlider>
  <NumericSlider
    {...{
      label: "quadtreeCapacity",
      min: 1,
      max: 100,
      step: 1,
      value: propertyStore(controlParams, "quadtreeCapacity"),
    }}
  ></NumericSlider>
  <NumericSlider
    {...{
      label: "speedScale",
      min: 0.1,
      max: 10,
      step: 0.1,
      value: propertyStore(controlParams, "speedScale"),
    }}
  ></NumericSlider>
  <NumericSlider
    {...{
      label: "minSpeed",
      min: 0.5,
      max: $controlParams.maxSpeed,
      step: 0.01,
      value: propertyStore(controlParams, "minSpeed"),
    }}
  ></NumericSlider>

  <NumericSlider
    {...{
      label: "maxSpeed",
      min: $controlParams.minSpeed,
      max: 5,
      value: propertyStore(controlParams, "maxSpeed"),
      step: 0.01,
    }}
  ></NumericSlider>

  <NumericSlider
    {...{
      label: "neighborRange",
      min: 1,
      max: 50,
      step: 0.01,
      value: propertyStore(controlParams, "neighborRange"),
    }}
  ></NumericSlider>
  <NumericSlider
    {...{
      label: "protectedRange",
      min: 1,
      max: $controlParams.neighborRange * 0.9,
      step: 0.01,
      value: propertyStore(controlParams, "protectedRange"),
    }}
  ></NumericSlider>
  <NumericSlider
    {...{
      label: "obstacleRange",
      min: 0,
      max: 100,
      step: 0.01,
      value: propertyStore(controlParams, "obstacleRange"),
    }}
  ></NumericSlider>
  <NumericSlider
    {...{
      label: "cohesionFactor",
      min: 0,
      max: 0.001,
      step: 0.000001,
      value: propertyStore(controlParams, "cohesionFactor"),
    }}
  ></NumericSlider>
  <NumericSlider
    {...{
      label: "separationFactor",
      min: 0,
      max: 0.5,
      step: 0.0001,
      value: propertyStore(controlParams, "separationFactor"),
    }}
  ></NumericSlider>
  <NumericSlider
    {...{
      label: "alignmentFactor",
      min: 0,
      max: 0.5,
      step: 0.0001,
      value: propertyStore(controlParams, "alignmentFactor"),
    }}
  ></NumericSlider>
  <NumericSlider
    {...{
      label: "turnFactor",
      min: 0,
      max: 1,
      step: 0.01,
      value: propertyStore(controlParams, "turnFactor"),
    }}
  ></NumericSlider>
</div>
