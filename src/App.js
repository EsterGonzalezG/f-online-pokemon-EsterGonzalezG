import React, { Component } from 'react';
import './App.css';
import mock from './data/mock';
import Home from './components/Home';
const url = 'https://pokeapi.co/api/v2/pokemon/';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokedex: [],
      pokemonName: ''
    }
    this.searchPokemon = this.searchPokemon.bind(this);
  }
  componentDidMount() {
    this.getpokemon();
  }

  getpokemon() {
    fetch(url)
      .then(response => response.json())
      .then(pokemon => {
        const pokemons = pokemon.results;
        const pokemonList = [];
        for (let i = 0; i < 25; i++) {
          pokemonList[i] = { ...pokemons[i], id: (i + 1), image: mock[i].image, types: mock[i].types };
        }

        this.setState({
          pokedex: pokemonList
        })

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
