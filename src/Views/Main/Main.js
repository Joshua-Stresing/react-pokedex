import React, { useEffect, useState } from 'react';
import './Main.css';
import { fetchPokemon, fetchTypes, filterTypes } from '../../services/pokemon/fetchpokemon';
import Filter from '../../components/Controls/Filter/Filter';
import SearchBar from '../../components/Controls/Search/Search';
import Order from '../../components/Controls/Order/Order';

export default function Main() {

  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('');

  useEffect(() =>{
    const fetchData = async () => {
      const typesData = await fetchTypes();
      setTypes(['all', ...typesData]);
      
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const data = await fetchPokemon();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() =>{
    const chosenType = async () => {
      const matchedTypes = await filterTypes(selectedType, null, order);
      setPokemon(matchedTypes);
    };
    if (selectedType) {
      chosenType();
    }
  }, [selectedType, order]);

  const pokeSearch = async () => {
    const data = await filterTypes(selectedType, search, order);
    setPokemon(data);
  };

  if (loading) return <div className="wrapper">
    <div className="pokeball">
    </div>
  </div>;



  return (
    <>
      <>
        <SearchBar query={search} setQuery={setSearch} searchSubmit={pokeSearch} />
        <Order setOrder={setOrder}/>
      </>
      <div>
        <Filter types={types} setSelectedType={setSelectedType}/>
      </div>
      <div className='Pokemon'>
        <h1>Pokemon</h1>
        {error && <p>{error}</p>}
        { pokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <h3>{pokemon.pokemon}</h3>
            <img src={pokemon.url_image}></img>
            <p>HP: {pokemon.hp} / Speed: {pokemon.speed}</p>
            <p>Attack: {pokemon.attack} / Defense: {pokemon.defense}</p>
            <p>Special Attack: {pokemon.special_attack} / Special Defense: {pokemon.special_defense}</p>
            <p>Type 1: {pokemon.type_1} / Type 2: {pokemon.type_2}</p>
          </div>
        )) }
      </div>
    </>
  );
}