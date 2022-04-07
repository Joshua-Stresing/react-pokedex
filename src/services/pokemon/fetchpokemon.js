export async function fetchPokemon() {

  const params = new URLSearchParams();

  const resp = await fetch (`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}&perPage=10`);
  const data = await resp.json();
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data.map((type) => type.type);
}

export async function filterTypes(type, search, direction) {
  const params = new URLSearchParams();
  params.set('sort', 'pokemon');
  params.set('direction', direction);
  
  if (type !== 'All'){
    params.set('type', type);      
  }
  if (search) {
    params.set('pokemon', search);
  }

  const filterType = await fetch (`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}&perPage=10`);
  const data = await filterType.json();
  return data.results;
}
