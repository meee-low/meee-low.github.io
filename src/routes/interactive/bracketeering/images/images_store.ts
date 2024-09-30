import { writable, type Writable } from "svelte/store";

export type ImageForRanking = { url: string; file: File };

export let imagesStore = writable<ImageForRanking[]>([]);

export let sortedImages = writable<ImageForRanking[]>([]);
