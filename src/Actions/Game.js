import { Actions } from './Constants'

export function tallyScore() {
    return { type: Actions.TALLY_SCORE };
}

export function endGame() {
    return { type: Actions.END_GAME }
}

export function dealCards(){
    return (dispatch, getState) => {
        dispatch({ type: Actions.DEAL });
        dispatch(tallyScore());
        if(getState().game.playerScore >= 21){
            dispatch(endGame());
        }
    }
}

export function hit(person){
    return (dispatch, getState) => {
        dispatch({ type: Actions.HIT, person });
        dispatch(tallyScore());
        if(getState().game.playerScore >= 21){
            dispatch(endGame());
        }
    }
}

export function stay(params) {
    return (dispatch, getState) => {
        while(getState().game.dealerScore < 17){
            dispatch(hit('dealer'));
        }
        dispatch(endGame());
    }
}

export function shuffleNewDeck(){
    return dispatch => {
        dispatch({ type: Actions.NEW_DECK });
    }
}