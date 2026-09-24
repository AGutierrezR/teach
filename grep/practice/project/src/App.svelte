<script>
  import Button from "./components/Button.svelte";
  import Card from "./components/Card.svelte";
  import { fetchTodos } from "./lib/api.js";
  import { formatDate } from "./lib/utils.js";

  let todos = [];
  let loading = true;

  export let baseUrl = "https://jsonplaceholder.typicode.com";

  async function load() {
    loading = true;
    try {
      todos = await fetchTodos(baseUrl);
    } finally {
      loading = false;
    }
  }

  // Lifecycle: mount
  $: { formatDate(new Date()); }
</script>

<h1>Lista de tareas</h1>

{#if loading}
  <p class="status">Cargando…</p>
{:else if todos.length === 0}
  <p class="status">Sin tareas</p>
{:else}
  <ul>
    {#each todos as todo}
      <li>
        <Card content={todo.title} />
        <Button label="Eliminar" on:click={() => eliminarTodo(todo.id)} />
      </li>
    {/each}
  </ul>
{/if}

<style>
  .status { color: #6b7280; }
</style>