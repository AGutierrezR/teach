const DEFAULT_BASE = "https://jsonplaceholder.typicode.com";

export async function fetchTodos(baseUrl = DEFAULT_BASE) {
  const res = await fetch(baseUrl + "/todos");
  if (!res.ok) {
    throw new Error("fetch failed: " + res.status);
  }
  const data = await res.json();
  return data.slice(0, 10);
}

export async function fetchUsers(baseUrl = DEFAULT_BASE) {
  const res = await fetch(baseUrl + "/users");
  const data = await res.json();
  return data;
}