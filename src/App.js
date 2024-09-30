import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [clickedCount, setClickedCount] = useState(0);

  const handleClick = () => {
    setClickedCount(clickedCount + 1);
  };

  return (
    <div>
      <input type="number" min="0" value={clickedCount} />
      <button
        style={{ display: 'inline', width: '100px', height: '30px' }}
        onClick={handleClick}
      >
        Click
      </button>
    </div>
  );
}
