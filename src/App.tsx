import React from 'react';
import './App.css';
import './pokecard.tsx'; // Take a look at this import statement - which one of these doesn't look like the other? *hint* - no file extension when importing & one other thing...

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
