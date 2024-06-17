<script lang="ts">
  // This component was taken from the Svelte official website.
  // https://svelte.dev/examples/modal

  export let showModal: boolean;

  let dialog: HTMLDialogElement;
  let closeButton: HTMLButtonElement;

  $: if (dialog && showModal) {
    dialog.showModal();
    // closeButton.focus();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  class="mx-auto overflow-visible p-0 lg:max-w-[80vw] xl:max-w-[60vw]"
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <button
      bind:this={closeButton}
      class="absolute -right-3 -top-3 h-10 w-10 rounded-full border bg-white"
      on:click={() => dialog.close()}
    >
      <i class="fa-solid fa-xmark text-xl" title="Close"><span class="sr-only">Close modal</span></i>
    </button>
    <slot />
  </div>
</dialog>

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.81);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
