const URL = "https://api.jsonbin.io/v3/b/6aa9183fffd5d16053092bd3";

export async function fetchDogs() {
  const response = await fetch(URL);
  if (!response.ok) throw new Error(`Status ${response.status}`);
  const data = await response.json();
  return data.record;
}
