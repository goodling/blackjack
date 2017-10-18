import { Actions } from './Constants'

export function levelUp() {
    return dispatch => {
      dispatch({ type: Actions.LEVEL_UP });
    };
}