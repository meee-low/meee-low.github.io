<script lang="ts">
  import { userInfo } from "../../cv-builder2";
</script>

<section>
  <h2>Personal Info</h2>
  <input type="text" name="name" id="form-name" bind:value={$userInfo.personalInfo.name.langs.default} placeholder="Your Name" />
  <input type="text" name="phone" id="form-phone" bind:value={$userInfo.personalInfo.phone.langs.default} placeholder="9-999-999-999" />
  <input type="text" name="email" id="form-email" bind:value={$userInfo.personalInfo.email.langs.default} placeholder="example@example.com" />
  <input type="text" name="linkedin" id="form-linkedin" bind:value={$userInfo.personalInfo.linkedin.langs.default} placeholder="in/example" />
  <input type="text" name="website" id="form-website" bind:value={$userInfo.personalInfo.website.langs.default} placeholder="example" />
  <input type="text" name="github" id="form-github" bind:value={$userInfo.personalInfo.github.langs.default} placeholder="example" />
</section>


<style>
  input {
    @apply border block
  }
</style>

