import { derived, writable, type Writable } from "svelte/store";
import { type Tag } from "$lib/interfaces";

export let projectsFilters = writable([
  { label: "Python", filterEnabled: false, baseOrder: 1, orderClicked: 0 },
  { label: "Data", filterEnabled: false, baseOrder: 2, orderClicked: 0 },
  { label: "Business", filterEnabled: false, baseOrder: 3, orderClicked: 0 },
  { label: "Backend/CLI", filterEnabled: false, baseOrder: 4, orderClicked: 0 },
  { label: "Other", filterEnabled: false, baseOrder: 5, orderClicked: 0 },
  { label: "Fun", filterEnabled: false, baseOrder: 6, orderClicked: 0 },
]);

export let filtering = derived(projectsFilters, ($projectsFilters) =>
  $projectsFilters.some((filter) => filter.filterEnabled),
);

function updateActiveFilters(tags: Tag[]): string[] {
  const filtering = tags.some((filter) => filter.filterEnabled);
  let result: string[] = [];
  for (let t of tags) {
    if (!filtering || t.filterEnabled) {
      result.push(t.label);
    }
  }
  return result;
}
export let activeFilters = derived(projectsFilters, ($projectsFilters) =>
  updateActiveFilters($projectsFilters),
);

interface Toggleable<T> extends Writable<boolean> {
  toggle: () => void;
}

function makeDarkModeStore(): Writable<boolean> {
  const { subscribe, set, update } = writable(false);
  
  const newSet: typeof set = (v) => {
    // console.log("updating dark mode");
    if (typeof document !== "undefined") {
      // console.log("changing document");
      if (v) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    if (typeof localStorage !== "undefined") {
      localStorage.dark = v;
    }
    return v;
  };

  // const toggle = () => newSet(!this);
  
  return {
    subscribe,
    set: newSet,
    update,
  };
}

export let darkMode = makeDarkModeStore();
