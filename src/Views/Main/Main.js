import React from 'react';
import { useState, useEffect } from 'react';
import './Main.css';
import { fetchPokemon } from '../../services/Pokemon/Pokefetch.js';


export default function Main() {

  useEffect(() =>{
    fetchPokemon();
  }, []);
  // return (
  // );
}
