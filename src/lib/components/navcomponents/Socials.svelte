<script lang="ts">
  import { contactInfo } from "$lib/data";

  const icons = [
    {
      title: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      link: contactInfo.linkedin,
    },
    { title: "GitHub", icon: "fa-brands fa-github", link: contactInfo.github },
    {
      title: "Twitter",
      icon: "fa-brands fa-twitter",
      link: contactInfo.twitter,
    },
    {
      title: "YouTube",
      icon: "fa-brands fa-youtube",
      link: contactInfo.youtube,
    },
    { title: "Email", icon: "fa-solid fa-envelope", link: contactInfo.email },
  ];
</script>

<div id="socials" class="flex flex-wrap items-center gap-3 text-xl text-white">
  {#each icons as icon}
    <a href={icon.link} class="hover:text-teal-100"
      ><i
        role="presentation"
        class={icon.icon}
        on:mouseenter={(e) => {
          // @ts-ignore
          e.toElement.classList.add("fa-shake");
        }}
        on:mouseleave={(e) => {
          setTimeout(
            () =>
              // @ts-ignore
              e.fromElement.classList.remove("fa-shake"),
            250,
          );
        }}
        style="--fa-animation-iteration-count: 1"
        title={icon.title}
      ></i></a
    >
  {/each}
</div>
