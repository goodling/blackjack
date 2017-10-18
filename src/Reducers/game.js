import { Actions, INITIAL_GAME_STATE, GAME_STATES } from '../Actions/Constants'
import { getPlayerScore, newDeck } from '../Services/Cards';

function getGameStatus(playerScore, dealerScore) {
    if (playerScore === 21) return GAME_STATES.WIN;
    if (playerScore > 21) return GAME_STATES.LOSE;
    if (dealerScore > 21) return GAME_STATES.WIN;
    if (playerScore >= dealerScore) return GAME_STATES.WIN;
    if (playerScore < dealerScore) return GAME_STATES.LOSE;
    return GAME_STATES.PLAYING;
}

export default function game(state = INITIAL_GAME_STATE, action){
    const newState = Object.assign({}, state);
    switch (action.type) {
        case Actions.NEW_GAME:
            return Object.assign({}, INITIAL_GAME_STATE);

        case Actions.DEAL:
            let [playerCard1, dealerCard1, playerCard2, dealerCard2] = newState.drawPile;
            dealerCard1.faceDown = true;
            newState.drawPile = newState.drawPile.slice(4),
            newState.dealerHand = [dealerCard1, dealerCard2],
            newState.playerHand = [playerCard1, playerCard2],
            newState.gameStatus = GAME_STATES.PLAYING
            break;

        case Actions.HIT:
            const [drawnCard, ...remainingPile] = newState.drawPile;
            const hitHandKey = `${action.person}Hand`;
            const hitHand = newState[hitHandKey];

            newState.drawPile = remainingPile,
            newState[hitHandKey] = [...hitHand, drawnCard];
            break;

        case Actions.TALLY_SCORE:
            newState.playerScore = getPlayerScore(newState.playerHand);
            newState.dealerScore = getPlayerScore(newState.dealerHand);
            break;

        case Actions.END_GAME:
            newState.gameStatus = getGameStatus(newState.playerScore, newState.dealerScore)
            newState.dealerHand = newState.dealerHand.map(card => ({ ...card, faceDown: false}))
            break;

        case Actions.NEW_DECK:
            newState.drawPile = newDeck();
            break;

        default:
            return state;
    }
    return newState;
}