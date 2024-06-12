<script lang="ts">
  import type { PersonalInfo } from "../cv-builder-simple";

  const icons = {
    phone: "fa-solid fa-phone",
    email: "fa-solid fa-envelope",
    linkedin: "fa-brands fa-linkedin",
    website: "fa-solid fa-globe",
    location: "fa-solid fa-location-dot",
    github: "fa-brands fa-github",
  };

  export let data: PersonalInfo;
  $: tightness = Object.entries(data).filter(([key, val]) => val.length > 0).length > 4 ? "tracking-tight": "";
</script>

<section
  class="mb-10 flex max-w-full flex-wrap place-content-between gap-x-4 gap-y-2 text-sm print:mb-2 print:gap-x-2 {tightness}  print:gap-y-1 print:text-[8pt]"
>
  {#if data.location && data.location.length > 0}
    <p class="">
      <i class="fa-solid fa-location-dot aria-hidden mr-1 text-teal-600"
      ></i>{data.location}
    </p>
  {/if}
  {#if data.email}
    <a class="text-nowrap" href={"mailto:" + data.email}>
      <i class="{icons.email} mr-1 text-teal-600"></i>{data.email}
    </a>
  {/if}
  {#if data.linkedin}
    <a class="text-nowrap" href={"https://linkedin.com/in/" + data.linkedin}>
      <i class="{icons.linkedin} mr-1 text-teal-600"></i>{"in/" + data.linkedin}
    </a>
  {/if}
  {#if data.phone}
    <a class="text-nowrap" href={"tel:" + data.phone.replace(/\D/g, "")}>
      <i class="{icons.phone} mr-1 text-teal-600"></i>{data.phone}
    </a>
  {/if}
  {#if data.website}
    <a class="text-nowrap" href={"https://" + data.website}>
      <i class="{icons.website} mr-1 text-teal-600"></i>{data.website}
    </a>
  {/if}
  {#if data.github}
    <a class="text-nowrap" href={"https://www.github.com/" + data.github}>
      <i class="{icons.github} mr-1 text-teal-600"></i>{data.github}
    </a>
  {/if}
</section>
