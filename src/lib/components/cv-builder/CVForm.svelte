<script lang="ts">
  import { writable } from "svelte/store";
  import CvFormInputText from "./CVFormInputText.svelte";

  let inputs = {
    Pessoal: [
      { label: "Nome", placeholder: "", type: "text", value: "" },
      {
        label: "Email",
        placeholder: "example@gmail.com",
        type: "email",
      },
      {
        label: "Telefone",
        placeholder: "(61) 99999-9999",
        type: "text",
      },
      { label: "Cidade", placeholder: "Brasília, DF", type: "text", value: "" },
    ],
    Certificados: [],
  };

  let personalInfo = writable({
    name: "",
    email: "",
    phoneNumber: "",
    workExperience: [
      ""
    ],
    
  });

  function addField(index: number) {
    const key = Object.keys(inputs)[index] as keyof typeof inputs;
    inputs = {
      ...inputs,
      ...{ key: {} },
    };
  }

  function handleSubmit() {
    console.log($personalInfo);
  }
</script>

<div class="p-4 px-[5vw] font-sans">
  <form on:submit={handleSubmit}>
    {#each Object.entries(inputs) as [category, vals], index}
      <h2 class="text-lg font-bold">{category}</h2>
      <div class="flex flex-col">
        {#each vals as val}
          <label>
            {val.label}
            <input
              class="rounded-lg border px-2"
              placeholder={val.placeholder}
              bind:value={val.value}
            />
          </label>
        {/each}
      </div>
      {#if index > 0}
        <button
          class="relative block rounded-xl border px-2 py-1"
          on:click={(_) => addField(index)}
        >
          <span class="sr-only">Adicionar novo</span>
          <i class="fa-solid fa-plus"></i>
        </button>
      {/if}
    {/each}
    <button
      class="mt-4 rounded-xl border bg-green-500 px-2 py-1 text-white hover:bg-green-700"
      type="submit"
    >
      Enviar
    </button>
  </form>
</div>
