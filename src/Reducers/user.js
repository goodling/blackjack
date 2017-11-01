import update from 'react-addons-update';

const defaultState = {
  uid: null,
  currentUser: {},
  wins: 0,
  losses: 0
}

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);;

  switch (action.type) {
    case 'USER_RETRIEVED':
      newState = update(state, {
          currentUser: { $set: action.currentUser }
      });
      break;

    case 'SET_CURRENT_USER':
      newState = update(state, { uid: { $set: action.uid } });
      break;

    case 'USER_LOGOUT':
      newState = update(state, {
        uid: { $set: null },
        currentUser: { $set: {} },
        wins: { $set: 0 },
        losses: { $set: 0 }
      });
      break;

    case 'USER_SCORES_RETRIEVED':
      newState = update(state, {
        wins: { $set: action.wins },
        losses: { $set: action.losses }
      });
      break;

    default:
      return newState
  }

  return newState;
};