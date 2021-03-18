import React, {Component} from 'react';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props:any) => { // you would need to define a "props" argument to be passed in here for the props object to be accessible inside the function scope
    let imgSrc = `${POKE_API}${this.props.id}.png`; // When using a functional component, we can't use `this.` "this" isn't referring to anything in the current context
    
    return <div>
      <h1>(this.props.name)</h1> // same issue as above
      <img src={imgSrc}/>
      <div>Type: {this.props.type}</div> // same as above
      <div>EXP: {this.props.exp}</div>  // same issue as above

    </div>
}

export default Pokecard;
