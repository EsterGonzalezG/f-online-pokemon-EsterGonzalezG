
import React from 'react';
import PokemonItem from './PokemonItem';
class PokemonList extends React.Component {
    render() {
        if (this.props.pokedex.length >= 1) {
            return (
                <ul className="pokemon__list">
                    {this.props.pokedex
                        .filter(item => {
                            return item.name.toLowerCase().includes(this.props.pokemonName);
                        })
                        .map((item, index) => {
                            return (
                                <li className="pokemon__item" key={index}>
                                    <PokemonItem item={item} />
                                </li>
                            );
                        })}
                </ul>
            );
        } else {
            return (
                <p>Estamos trabajando en ello</p>
            );
        }
    }
}
export default PokemonList;
