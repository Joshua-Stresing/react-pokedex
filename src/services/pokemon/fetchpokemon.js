export async function fetchPokemon() {

  const params = new URLSearchParams();

  const resp = await fetch (`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}&perPage=10`);
  const data = await resp.json();

  return data.results;
}
