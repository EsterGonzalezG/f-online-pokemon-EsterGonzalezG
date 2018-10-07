import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokedex: [],
      pokeData: [],
      pokemonName: ''
    }
    this.searchPokemon = this.searchPokemon.bind(this);
  }
  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url)
      .then(response => response.json())
      .then(pokemon => {
        const pokemons = pokemon.results;
        const pokemonList = [];
        for (let i = 0; i < 25; i++) {
          pokemonList[i] = { ...pokemons[i]};
        }
        this.setState({
          pokeData: pokemonList
        })
        for (let i = 0; i < this.state.pokeData.length; i++) {
          //const url = this.state.pokeData[i].url;
          const url='https://pokeapi.co/api/v2/pokemon/'+(i+1)+'/';
          fetch(url)
            .then((response) => response.json())
            .then((response2) => {
              const pokemonData = {
                name: response2.name,
                image: response2.sprites.front_default,
                types: response2.types,
                id: response2.id
              }
              let pokemonCharacteristics = this.state.pokedex;
              pokemonCharacteristics.push(pokemonData);
              this.setState({
                pokedex: pokemonCharacteristics
              });
            });
        };
      })
  }

  searchPokemon(event) {
    const pokemonName = event.currentTarget.value.toLowerCase();
    this.setState({
      pokemonName: pokemonName
    })

  }
  render() {
    return (
      <div className="App">
        <Home pokedex={this.state.pokedex} searchPokemon={this.searchPokemon} pokemonName={this.state.pokemonName} />
      </div>
    );
  }
}

export default App;
