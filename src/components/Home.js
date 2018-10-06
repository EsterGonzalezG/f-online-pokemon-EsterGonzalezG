import PokemonList from '../components/PokemonList';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="item">
        <input placeholder="buscar pokemonón por nombre" type="text" onChange={this.props.searchPokemon} />
        <PokemonList pokedex={this.props.pokedex} pokemonName={this.props.pokemonName} />
      </div>
    );
  }
}

export default Home;