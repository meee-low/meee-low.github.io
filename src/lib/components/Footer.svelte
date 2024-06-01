<script>
  import { contactInfo } from "$lib/data";
</script>

<footer class="bg-slate-500 px-[2.5vw] py-2 text-white">
  <!-- <h2 class="mb-2 text-xl font-bold">About me:</h2> -->
  <p class="mb-2">Matheus Ferreira Drumond</p>
  <!-- <p>
    <i class="fa-solid fa-graduation-cap fa-fw mr-1"
      ><span class="sr-only">Alma Mater</span></i
    >UFRGS, Porto Alegre, Brazil
  </p> -->
  <div class="text-sm">
  <p><i class="fa-solid fa-location-dot fa-fw mr-1"><span class="sr-only">Location</span></i>Brasília, DF - Brazil</p>
  <div class="flex flex-wrap gap-x-3">
    <a href={contactInfo.linkedin} class="hover:underline"
      ><i class="fa-brands fa-linkedin fa-fw mr-1">
        <span class="sr-only">Linkedin</span>
      </i>in/mfdrumond</a
    >
    <a href={contactInfo.github} class="hover:underline"
      ><i class="fa-brands fa-github fa-fw mr-1">
        <span class="sr-only">GitHub</span>
      </i>@meee-low</a
    >
    <a href="/my-cv" class="hover:underline"
      ><i class="fa-solid fa-file-lines fa-fw mr-1">
        <span class="sr-only">Resume/CV</span>
      </i>Resume</a
    >
  </div>
  </div>
</footer>