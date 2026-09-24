<script>
  export let label = "Botón";
  export let disabled = false;
</script>

<button {disabled} class="btn">
  {label}
</button>

<style>
  .btn {
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    background: #f9fafb;
    cursor: pointer;
  }
  .btn:hover {
    background: #f3f4f6;
  }
  .btn:disabled {
    opacity: 0.5;
    cursor: default;
  }
</style>