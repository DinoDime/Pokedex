import React, {Component} from 'react';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padNumber = (number:number) => (number <= 999 ? `00${number}`.slice(-3): number);

const Pokecard = (props:any) => { // you would need to define a "props" argument to be passed in here for the props object to be accessible inside the function scope
    let imgSrc = `${POKE_API}${padNumber(props.id)}.png`; // When using a functional component, we can't use `this.` "this" isn't referring to anything in the current context
    
    return <div>
      <h1>(props.name)</h1> 
      <img src={imgSrc} alt='pokemon'/>
      <div>Type: {props.type}</div>
      <div>EXP: {props.exp}</div>  

    </div>
}

export default Pokecard;
