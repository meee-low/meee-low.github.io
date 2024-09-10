<script lang="ts">
  import { type Writable } from "svelte/store";
  import { type PersonalInfo } from "../../cv-builder-simple";
  import { selectedLanguageString as s } from "$lib/stores";
  export let data: Writable<PersonalInfo>;
</script>

<section class="mb-2 grid gap-2">
  <h2 class="text-lg font-bold">
    {$s.interactive.cvbuilder.personalInfo.sectionHeader}
  </h2>
  <label>
    {$s.interactive.cvbuilder.personalInfo.name}:
    <input
      class="w-full rounded-sm border"
      type="text"
      name="name"
      autocomplete="name"
      required
      id="form-name"
      bind:value={$data.name}
      placeholder={$s.interactive.cvbuilder.placeholders.name}
    />
  </label>
  <label class="block">
    {$s.interactive.cvbuilder.personalInfo.phone}:
    <input
      class="inline-block w-full rounded-sm border"
      type="tel"
      name="phone"
      autocomplete="tel-local"
      required
      id="form-phone"
      bind:value={$data.phone}
      placeholder={$s.interactive.cvbuilder.placeholders.phone}
    />
  </label>
  <label class="block">
    {$s.interactive.cvbuilder.personalInfo.email}:
    <input
      class="inline-block w-full rounded-sm border"
      type="email"
      name="email"
      autocomplete="email"
      required
      id="form-email"
      bind:value={$data.email}
      placeholder={$s.interactive.cvbuilder.placeholders.email}
    />
  </label>
  <label class="block">
    {$s.interactive.cvbuilder.personalInfo.linkedin}:
    <input
      class="inline-block w-full rounded-sm border"
      type="text"
      name="linkedin"
      id="form-linkedin"
      bind:value={$data.linkedin}
      placeholder={$s.interactive.cvbuilder.placeholders
        .genericExamplePlaceholder}
    />
  </label>
  <label class="block">
    {$s.interactive.cvbuilder.personalInfo.website}:
    <input
      class="inline-block w-full rounded-sm border"
      type="url"
      name="website"
      id="form-website"
      bind:value={$data.website}
      placeholder={$s.interactive.cvbuilder.placeholders.website}
    />
  </label>
  <label class="block">
    {$s.interactive.cvbuilder.personalInfo.github}:
    <input
      class="inline-block w-full rounded-sm border"
      type="text"
      name="github"
      id="form-github"
      bind:value={$data.github}
      placeholder={$s.interactive.cvbuilder.placeholders
        .genericExamplePlaceholder}
    />
  </label>
</section>
