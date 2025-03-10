<script lang="ts">
  export let faIcon: string;
  export let sectionTitle: string;
</script>

<h2 class="header-line mb-2 text-lg font-extrabold uppercase print:mb-2">
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
    margin-top: -0.3rem;
    border-radius: 0.5rem;
  }
</style>
