//import './pokemonItem.css';
import React from 'react';
import '../App.css';
class PokemonItem extends React.Component {

    render() {
        return (
            <div className="pokemon__card">
                <div className="card--image">
                    <div className="pokemon__image" style={{ backgroundImage: 'url(' + this.props.item.image + ')' }}></div>
                    <p className="pokemon--id">ID / {this.props.item.id}</p>
                </div>
                <div className="pokemon__Characteristics">
                    <h3 className="pokemon__name">{this.props.item.name}</h3>
                    <ul className="pokemon__types--list">
                        {this.props.item.types
                            .map((item, index) => {
                                return (
                                    <li className="pokemon__types" key={index}>
                                        {item.type.name}
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        );

    }
}

export default PokemonItem;