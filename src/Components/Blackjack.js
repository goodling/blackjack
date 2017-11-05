import React from 'react';
import CardTable from './CardTable';
import { GAME_STATES } from '../Actions/Constants';
import { Howl } from 'howler';
import entertainer from '../Assets/entertainer.mp3';

export default class Blackjack extends React.Component {

  constructor(props) {
    super(props);
    this.state = { muted: false } ;
    this.music = undefined;
  }

  componentDidMount(){
    this.music = new Howl({
      src: [entertainer],
      autoplay: true,
      loop: true,
      volume: 0.05
    });
    this.music.play();
  }

  componentWillUnmount(){
    this.music.unload();
  }

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

  handleMute(){
    this.setState({ muted: !this.state.muted }, function(){
      if(this.music){
        this.music.mute(this.state.muted);
      }
    });
  }

  renderStatusMessage() {
    const { gameStatus, playerScore, dealerScore } = this.props;
    if(gameStatus === GAME_STATES.LOSE && playerScore > 21) return 'Bust!';
    if(gameStatus === GAME_STATES.WIN) return 'Winner!';
    if(gameStatus === GAME_STATES.LOSE && playerScore < dealerScore) return 'Dealer wins!';
    if(gameStatus === GAME_STATES.PLAYING) return 'Game in progess.';
    return 'Welcome to a redux blackjack game. Press Deal to begin!';
  }

  renderEmoji(){
    const { gameStatus, playerScore, dealerScore } = this.props;
    if(gameStatus === GAME_STATES.LOSE && playerScore > 21) return '😬';
    if(gameStatus === GAME_STATES.WIN) return '🤑';
    if(gameStatus === GAME_STATES.LOSE && playerScore < dealerScore) return '😜';
    if(gameStatus === GAME_STATES.PLAYING) return '😉';
    return '☺️';
  }

  render() {
    return (
      <div className="blackjack">
        <button className="button-logout" onClick={this.handleUserLogout.bind(this)}>LOG OUT</button>
        <div className="player-stats">
        <div>{"Player: " + this.props.user.user_name}</div>
        <div>{"Wins: " + this.props.userWins}</div>
        <div>{"Losses: " + this.props.userLosses}</div>
        </div>
        <div className="blackjack__inner-wrap" >
        <div className="outerspace">
        <span className="spacheman" role="img" aria-label="spaceman">
        {this.renderEmoji()}
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
        <button className="button-mute" onClick={this.handleMute.bind(this)}>{this.state.muted ? '🔇' : '🔈' }</button>
      </div>
    );
  }
}
