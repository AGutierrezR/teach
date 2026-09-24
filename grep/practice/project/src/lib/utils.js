export function formatDate(date) {
  const parts = date.toISOString().split("T")[0].split("-");
  return parts[2] + "/" + parts[1] + "/" + parts[0];
}

export function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

export function className(...names) {
  return names.filter(Boolean).join(" ");
}