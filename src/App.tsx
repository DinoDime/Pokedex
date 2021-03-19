import React from 'react';
import Pokecard from './pokecard'; //this one is right
import './App.css';
import background from './background';

function App() {
  return (<Pokecard id={4}
    name="Charmander" 
    type="fire" 
    exp={62} />)
  };

export default App;
