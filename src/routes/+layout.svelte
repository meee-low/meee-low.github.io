<script>
  import Footer from "$lib/components/Footer.svelte";
  import NavBar from "$lib/components/NavBarHero.svelte";
  import "../app.css";
</script>

<NavBar></NavBar>
<main class="flex-grow">
  <slot></slot>
</main>
<Footer></Footer>
