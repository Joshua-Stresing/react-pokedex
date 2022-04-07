import React from 'react';

export default function Order({ setOrder }) {
  return (
    <div>
      <select onChange={(e) => setOrder(e.target.value)}>
        <option value='asc'>Asc.</option>
        <option value='desc'>Desc.</option>
      </select>
    </div>
  );
}