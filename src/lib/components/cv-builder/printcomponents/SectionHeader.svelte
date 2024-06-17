<script lang="ts">
  export let faIcon: string;
  export let sectionTitle: string;
</script>

<h2
  class="mb-2 header-line text-lg font-extrabold uppercase print:mb-1"
>
  <i class="{faIcon} fa-fw" aria-hidden="true"></i>
  {sectionTitle}
</h2>

<style>
  .header-line::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000000;
    margin-top: -0.30rem;
    border-radius: 0.50rem;
  }
</style>
