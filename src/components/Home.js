import PokemonList from '../components/PokemonList';
import React from 'react';
//import '../styles/home.css';
class Home extends React.Component {
  render() {
    return (
      <div>
        <input className="input__search" placeholder="Filtra pokemons por nombre..."
          type="text" onChange={this.props.searchPokemon} />
        <PokemonList pokedex={this.props.pokedex} pokemonName={this.props.pokemonName} />
      </div>
    );
  }
}

export default Home;