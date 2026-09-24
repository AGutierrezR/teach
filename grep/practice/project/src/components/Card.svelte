<script>
  export let content = "";
  export let title = "";
</script>

<div class="card">
  {#if title}
    <h3>{title}</h3>
  {/if}
  <p>{content}</p>
</div>

<style>
  .card {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 1rem;
    background: white;
  }
</style>