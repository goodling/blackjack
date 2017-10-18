import React from 'react';
import CardTable from './CardTable';
import { GAME_STATES } from '../Actions/Constants';

export default class Blackjack extends React.Component {

  dealCards() {
    if (this.props.dealCards){
      this.props.dealCards();
    }
  }

  handleUserLogout(){
    if(this.props.logoutUser){
        this.props.logoutUser();
    }
}

  renderStatusMessage() {
    const { gameStatus, playerScore, dealerScore } = this.props;
    if(gameStatus === GAME_STATES.LOSE && playerScore > 21) return 'Bust!';
    if(gameStatus === GAME_STATES.WIN) return 'Winner!';
    if(gameStatus === GAME_STATES.LOSE && playerScore < dealerScore) return 'Dealer wins!';
    if(gameStatus === GAME_STATES.PLAYING) return 'Game in progess.';
    return 'Welcome to a redux blackjack game. Press Deal to begin!';
  }

  render() {
    return (
      <div className="blackjack">
        <button onClick={this.handleUserLogout.bind(this)}>LOG OUT</button>
        <div className="outerspace">
          <span className="spacheman" role="img" aria-label="spaceman">
            👨‍🚀
          </span>
          <span className="rocket" role="img" aria-label="rocket">
            🚀
          </span>
        </div>
        <div className="message-container">
          <h1>{this.renderStatusMessage()}</h1>
        </div>
        <CardTable { ...this.props } />
      </div>
    );
  }
}
