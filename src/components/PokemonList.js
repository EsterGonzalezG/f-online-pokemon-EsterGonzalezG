
import React from 'react';
import PokemonItem from './PokemonItem';
import '../App.css';
//import './pokemonList.css';
class PokemonList extends React.Component {
    render() {

        return (
            <ul className="pokemon__list">
                {this.props.pokedex
                    .filter(item => {
                        return item.name.toLowerCase().includes(this.props.pokemonName);
                    })
                    .sort((x, y) => x.id - y.id)
                    .map((item, index) => {
                        return (
                            <li className="pokemon__item" key={index}>
                                <PokemonItem item={item} />
                            </li>
                        );
                    })}
            </ul>
        );

    }
}
export default PokemonList;
