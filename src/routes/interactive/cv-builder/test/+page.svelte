<script lang="ts">
  import {userInfo, WorkExperienceUnit} from "$lib/components/cv-builder/cv-builder2"
    import PersonalInfo from "$lib/components/cv-builder/formcomponents/sections/PersonalInfo.svelte";

  $: console.log($userInfo);

  function addWorkExperience() {
    $userInfo.workExperience.push(WorkExperienceUnit.empty())
    $userInfo = $userInfo
  }

</script>

<div>
  <form action="">
    <PersonalInfo></PersonalInfo>
    <section>
      <h2>Work Experience</h2>
      {#each $userInfo.workExperience as we}
      <label>
        Employer
        <input type="text" bind:value={we.employer.langs.default} />
      </label>
      {/each}
      <button on:click={addWorkExperience}>Add</button>
    </section>
    <h2></h2>
  </form>
</div>

<style>
  input {
    @apply border rounded-lg;
  }
  button {
    @apply border rounded-lg py-0.5 px-2;
  }
</style>
