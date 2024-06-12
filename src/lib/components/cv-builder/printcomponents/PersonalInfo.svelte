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
  $: tightness =
    Object.entries(data).filter(([key, val]) => val.length > 0).length > 4
      ? "tracking-tight"
      : "";
</script>

<section>
  <ul
    class="mb-10 flex max-w-full flex-wrap place-content-between gap-x-4 gap-y-2 text-sm print:mb-2 print:gap-x-2 {tightness}  print:gap-y-1 print:text-[8pt]"
  >
    {#if data.location && data.location.length > 0}
      <li>
        <p class="">
          <i class="fa-solid fa-location-dot aria-hidden mr-1 text-teal-600"
          ></i>{data.location}
        </p>
      </li>
    {/if}
    {#if data.email}
      <li>
        <a class="text-nowrap" href={"mailto:" + data.email}>
          <i class="{icons.email} mr-1 text-teal-600"></i>{data.email}
        </a>
      </li>
    {/if}
    {#if data.linkedin}
      <li>
        <a
          class="text-nowrap"
          href={"https://linkedin.com/in/" + data.linkedin}
        >
          <i class="{icons.linkedin} mr-1 text-teal-600"
          ></i>{"linkedin.com/in/" + data.linkedin}
        </a>
      </li>
    {/if}
    {#if data.phone}
      <li>
        <a class="text-nowrap" href={"tel:" + data.phone.replace(/\D/g, "")}>
          <i class="{icons.phone} mr-1 text-teal-600"></i>{data.phone}
        </a>
      </li>
    {/if}
    {#if data.website}
      <li>
        <a class="text-nowrap" href={"https://" + data.website}>
          <i class="{icons.website} mr-1 text-teal-600"></i>{data.website}
        </a>
      </li>
    {/if}
    {#if data.github}
      <li>
        <a class="text-nowrap" href={"https://www.github.com/" + data.github}>
          <i class="{icons.github} mr-1 text-teal-600"></i>{"github.com/" +
            data.github}
        </a>
      </li>
    {/if}
  </ul>
</section>
