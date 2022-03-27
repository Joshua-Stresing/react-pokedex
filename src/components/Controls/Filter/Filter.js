import React from 'react';
import './Filter.css';

// export default function Filter({ setType, type }) {
//   return (
//     <div className='filter'>
//           Type Select
//       <select onChange={(e) => setType (e.target.value)}>
//         {type.map((type) => (
//           <option key={type} value={type}>{type}</option>
//         ))}
//       </select>        
//     </div>
//   ); 
// }

export default function TypeFilter({ types, selectedType, setSelectedType }) {
  return (
    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
      {types.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}