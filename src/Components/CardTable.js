import React from 'react';
import Hand from './Hand';
import { GAME_STATES } from '../Actions/Constants';

export default class CardTable extends React.Component {

    getNewDeck(){
        if(this.props.shuffleNewDeck){
            this.props.shuffleNewDeck();
        }
    }

    render () {
        const { drawPile, dealerHand, playerHand, dealerScore, playerScore, gameStatus} = this.props;
        return (
            <div>
                <button disabled={drawPile.length === 0 || gameStatus === GAME_STATES.PLAYING} onClick={ this.props.dealCards.bind(this) }>Deal</button>
                <hr />
                { drawPile && drawPile.length === 0 ?
                [<div>Deck is empty, refresh for a new game.</div>,
                <button  onClick={ this.getNewDeck.bind(this) }>Shuffle New Deck</button>,
                <hr />
                ] : null }
                <Hand label="Dealer: " cards={ dealerHand } />
                <div>Dealer Score: {
                    gameStatus === GAME_STATES.PLAYING
                        ? '?'
                        : dealerScore }</div>
                <hr />
                <Hand label="Your Hand: " cards={ playerHand } />
                <div>Your Score: { playerScore }</div>
                <hr />
                <button disabled={gameStatus !== GAME_STATES.PLAYING} onClick={ () => this.props.hit('player') }>Hit</button>
                <button disabled={gameStatus !== GAME_STATES.PLAYING} onClick={ this.props.stay.bind(this) }>Stand</button>
            </div>
        )

    }
}