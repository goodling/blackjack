import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Blackjack from '../Components/Blackjack';
import { dealCards, hit, shuffleNewDeck, stay } from '../Actions/Game';
import { logoutUser } from '../Actions/User';

function mapStateToProps (state) {
  return {
    drawPile: state.game.drawPile,
    dealerHand: state.game.dealerHand,
    playerHand: state.game.playerHand,
    dealerScore: state.game.dealerScore,
    playerScore: state.game.playerScore,
    gameStatus: state.game.gameStatus,
    user: state.user.currentUser,
    userWins: state.user.wins,
    userLosses: state.user.losses
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    dealCards,
    hit,
    shuffleNewDeck,
    stay,
    logoutUser
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blackjack);