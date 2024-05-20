<script lang="ts">
  import { contactInfo } from "$lib/data";
</script>

<div id="socials" class="flex flex-wrap items-center gap-3 text-xl text-white">
  <a href={contactInfo.linkedin}><i class="fa-brands fa-linkedin"></i></a>
  <a href={contactInfo.twitter}><i class="fa-brands fa-twitter"></i></a>
  <a href={contactInfo.github}><i class="fa-brands fa-github"></i></a>
  <a href={contactInfo.youtube}><i class="fa-brands fa-youtube"></i></a>
  <a href={contactInfo.email}><i class="fa-solid fa-envelope"></i></a>
</div>
