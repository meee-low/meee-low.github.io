<script lang="ts">
  import { type Writable } from "svelte/store";
  import { type PersonalInfo } from "../../cv-builder-simple";
  export let data: Writable<PersonalInfo>;
</script>

<section class="mb-2">
  <h2 class="font-bold text-lg">Personal Info</h2>
  <label class="block"> Nome:
    <input
      class="border inline-block"
      type="text"
      name="name"
      id="form-name"
      bind:value={$data.name}
      placeholder="Your Name"
    />
  </label>
  <label class="block"> Telefone:
    <input
      class="border inline-block"
      type="text"
      name="phone"
      id="form-phone"
      bind:value={$data.phone}
      placeholder="9-999-999-999"
    />
  </label>
  <label class="block"> Email:
    <input
      class="border inline-block"
      type="text"
      name="email"
      id="form-email"
      bind:value={$data.email}
      placeholder="example@example.com"
    />
  </label>
  <label class="block"> LinkedIn:
    <input
      class="border inline-block"
      type="text"
      name="linkedin"
      id="form-linkedin"
      bind:value={$data.linkedin}
      placeholder="example"
    />
  </label>
  <label class="block"> Website:
    <input
      class="border inline-block"
      type="text"
      name="website"
      id="form-website"
      bind:value={$data.website}
      placeholder="example.com"
    />
  </label>
  <label class="block"> GitHub:
    <input
      class="border inline-block"
      type="text"
      name="github"
      id="form-github"
      bind:value={$data.github}
      placeholder="example"
    />
  </label>
</section>