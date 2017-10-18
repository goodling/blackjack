import { newDeck } from '../Services/Cards'

export const Actions = {
    GAIN_XP: 'GAIN_XP',
    LEVEL_UP: 'LEVEL_UP',
    HIT: 'HIT',
    DEAL: 'DEAL',
    STAY: 'STAY',
    NEW_GAME: 'NEW_GAME',
    TALLY_SCORE: 'TALLY_SCORE',
    END_GAME: 'END_GAME',
    NEW_DECK: 'NEW_DECK'
};


export const GAME_STATES = {
  WIN: 'WIN',
  LOSE: 'LOSE',
  PLAYING: "PLAYING",
  READY: "READY"
};


export const INITIAL_GAME_STATE = {
  drawPile: newDeck(),
  dealerHand: [],
  dealerScore: 0,
  playerScore: 0,
  playerHand: [],
  currentDeck: [],
  gameStatus: GAME_STATES.READY,
  level: 1
};