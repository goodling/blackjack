import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import game from './game'
import user from './user'

export default combineReducers({
  game,
  user,
  routing: routerReducer,
});
