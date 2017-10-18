import update from 'react-addons-update';

const defaultState = {
  uid: null,
  currentUser: {}
}

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);;

  switch (action.type) {
    case 'IDENTITY_RETRIEVED':
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
        currentUser: { $set: {} }
      });
      break;

    default:
      return newState
  }

  return newState;
};