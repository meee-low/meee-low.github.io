import { derived, writable } from "svelte/store";
import { type Tag } from "$lib/interfaces";

export let projectsFilters = writable([
  { label: "Python", filterEnabled: false, baseOrder: 1 },
  { label: "Data", filterEnabled: false, baseOrder: 2 },
  { label: "Business", filterEnabled: false, baseOrder: 3 },
  { label: "Backend/CLI", filterEnabled: false, baseOrder: 4 },
  { label: "Other", filterEnabled: false, baseOrder: 5 },
  { label: "Fun", filterEnabled: false, baseOrder: 6 },
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
