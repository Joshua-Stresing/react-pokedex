import { useEffect } from 'react';
import './Main.css';
import { fetchPokemon } from '../../services/Pokemon/Pokefetch';


export default function Main() {

  useEffect(() =>{
    fetchPokemon();
  }, []);
  return ('');
}
