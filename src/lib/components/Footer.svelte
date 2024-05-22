<script>
  import { contactInfo } from "$lib/data";
</script>

<footer class="bg-slate-500 px-[5%] py-3 text-white">
  <h2 class="mb-2 text-xl font-bold">About me:</h2>
  <p>Matheus Ferreira Drumond</p>
  <p>
    <i class="fa-solid fa-graduation-cap mr-2"></i>UFRGS, Porto Alegre, Brazil
  </p>
  <div>
    <h2>Contact:</h2>
    <div class="flex gap-4">
      <p>
        <a href={contactInfo.linkedin} class="hover:underline"
          ><i class="fa-brands fa-linkedin mr-1"></i>in/mfdrumond</a
        >
      </p>
      <p>
        <a href={contactInfo.github} class="hover:underline"
          ><i class="fa-brands fa-github mr-1"></i>@meee-low</a
        >
      </p>
    </div>
  </div>
</footer>
