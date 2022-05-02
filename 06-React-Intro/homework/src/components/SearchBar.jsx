import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div>
  
    <input type = 'text' placeholder='ciudad...'></input>
    <button onClick = {()=>props.onSearch('Buscando Ciudad')}>agregar</button>
  </div>)
};