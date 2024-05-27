<script>
  import { contactInfo } from "$lib/data";
</script>

<style>
  @media print {
  footer * {
    display: none
    }
  }
</style>

<footer class="bg-slate-500 px-[5%] py-3 text-white">
  <h2 class="mb-2 text-xl font-bold">About me:</h2>
  <p>Matheus Ferreira Drumond</p>
  <p>
    <i class="fa-solid fa-graduation-cap mr-1"><span class="sr-only">Alma Mater</span></i>UFRGS,
    Porto Alegre, Brazil
  </p>
  <div>
    <h2>Contact:</h2>
    <div class="flex gap-4">
      <p>
        <a href={contactInfo.linkedin} class="hover:underline"
          ><i class="fa-brands fa-linkedin mr-1">
          <span class="sr-only">Linkedin</span>
          </i>in/mfdrumond</a
        >
      </p>
      <p>
        <a href={contactInfo.github} class="hover:underline"
          ><i class="fa-brands fa-github mr-1">
            <span class="sr-only">GitHub</span>
          </i>@meee-low</a
        >
      </p>
    </div>
  </div>
</footer>
