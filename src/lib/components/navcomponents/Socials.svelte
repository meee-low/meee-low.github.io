<script lang="ts">
  import EmailSvg from "$lib/components/svg/EmailSVG.svelte";
  import GitHubSvg from "$lib/components/svg/GitHubSVG.svelte";
  import LinkedInSvg from "$lib/components/svg/LinkedInSVG.svelte";
  // import LogoPlaceholder from "$lib/components/svg/LogoPlaceholder.svelte";
  import TwitterSvg from "$lib/components/svg/TwitterSVG.svelte";
  import YoutubeSvg from "$lib/components/svg/YoutubeSVG.svelte";
</script>

<div id="socials" class="flex min-w-44 flex-wrap items-center space-x-2">
  <LinkedInSvg></LinkedInSvg>
  <TwitterSvg></TwitterSvg>
  <GitHubSvg></GitHubSvg>
  <YoutubeSvg></YoutubeSvg>
  <EmailSvg></EmailSvg>
</div>
