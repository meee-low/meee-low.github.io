<script lang="ts">
  import { type Writable } from "svelte/store";
  import { type PersonalInfo } from "../../cv-builder-simple";
  export let data: Writable<PersonalInfo>;
</script>

<section class="mb-2 grid gap-2">
  <h2 class="font-bold text-lg">Personal Info</h2>
  <label>
    Nome:
    <input
      class="rounded-sm border w-full"
      type="text"
      name="name"
      autocomplete="name"
      required
      id="form-name"
      bind:value={$data.name}
      placeholder="Your Name"
    />
  </label>
  <label class="block"> Telefone:
    <input
      class="rounded-sm w-full border inline-block"
      type="tel"
      name="phone"
      autocomplete="tel-local"
      required
      id="form-phone"
      bind:value={$data.phone}
      placeholder="9-999-999-999"
    />
  </label>
  <label class="block"> Email:
    <input
      class="rounded-sm w-full border inline-block"
      type="email"
      name="email"
      autocomplete="email"
      required
      id="form-email"
      bind:value={$data.email}
      placeholder="example@example.com"
    />
  </label>
  <label class="block"> LinkedIn:
    <input
      class="rounded-sm w-full border inline-block"
      type="text"
      name="linkedin"
      id="form-linkedin"
      bind:value={$data.linkedin}
      placeholder="example"
    />
  </label>
  <label class="block"> Website:
    <input
      class="rounded-sm w-full border inline-block"
      type="url"
      name="website"
      id="form-website"
      bind:value={$data.website}
      placeholder="example.com"
    />
  </label>
  <label class="block"> GitHub:
    <input
      class="rounded-sm w-full border inline-block"
      type="text"
      name="github"
      id="form-github"
      bind:value={$data.github}
      placeholder="example"
    />
  </label>
</section>