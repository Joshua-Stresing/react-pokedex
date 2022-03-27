import React, { useEffect, useState } from 'react';
import './Main.css';
import { fetchPokemon, fetchTypes } from '../../services/pokemon/fetchpokemon';
import Filter from '../../components/Controls/Filter/Filter';



export default function Main() {

  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState('');
  const [selectedType, setSelectedType] = useState('ALL');
  const [error, setError] = useState('');

  // const types = ['All', 'Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];
  
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

      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);


  return (
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
  );
}