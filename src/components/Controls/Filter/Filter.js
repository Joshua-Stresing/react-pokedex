import React from 'react';
import './Filter.css';

export default function Filter({ setSelectedType, types }) {
  return (
    <div className='filter'>
          Type Select
      <select onChange={(e) => setSelectedType (e.target.value)}>
        {types.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>        
    </div>
  ); 
}

// export default function TypeFilter({ types, selectedType, setSelectedType }) {
//   return (
//     <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
//       {types.map((type) => (
//         <option key={type}>{type}</option>
//       ))}
//     </select>
//   );
// }