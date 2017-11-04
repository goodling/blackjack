import React from 'react';
import Card from './Card';

export default class Hand extends React.Component {

    render () {
        const { label, cards } = this.props;
        return (
            <div className="hand">
                <label className="hand__label" >{ label }</label>
                <div className="hand__card-wrap">
                    { cards.map((card, i) =>
                        <Card
                            faceDown={ card.faceDown }
                            color={ card.color }
                            rank={ card.rank }
                            suit={ card.symbol }
                            key={ i }
                            />
                    )}
                </div>
            </div>
        )
    }
}
