import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import "./pokecard.tsx";

function App() {
  return <div>
    <Pokecard
      id={4}
      name="Charmander"
      type="fire"
      exp={62}
  />
  </div>
  };

export default App;
