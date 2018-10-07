import '../App.css';

import React from 'react';

class PokemonItem extends React.Component {

    render() {
        return (
            <div>
                <div className="pokemon__image" style={{ backgroundImage: 'url(' + this.props.item.image + ')' }}></div>
                <p>ID / {this.props.item.id}</p>
                <h3>{this.props.item.name}</h3>
                <ul>
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
        );

    }
}

export default PokemonItem;