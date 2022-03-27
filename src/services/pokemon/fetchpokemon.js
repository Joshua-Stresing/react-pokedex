export async function fetchPokemon() {

  const params = new URLSearchParams();

  const resp = await fetch (`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}&perPage=10`);
  const data = await resp.json();

  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  console.log(data);
  return data.map((type) => type.type);
}

export async function filterTypes(type) {
  const params = new URLSearchParams();

  if (
    type !== 'All'
  ){
    params.set('type', type);      
  }

  const filterType = await fetch (`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}&perPage=10`);
  const data = await filterType.json();
  return data.results;
}
