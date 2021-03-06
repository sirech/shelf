import update from 'react-addons-update'
import { register } from 'hops'
import { RECEIVE_GAMES } from './actions'
import { actionType } from '../creator/actions'

import { trackYearReducer } from '../utils/years'

function addGame (games, activeYear, game) {
  if (activeYear !== game.year) {
    return games
  }

  return update(games, { $push: Array(game) })
}

function games (state = {}, action) {
  switch (action.type) {
    case RECEIVE_GAMES:
      return { ...state, games: action.games }
    case actionType('games', 'success'):
      return { ...state, games: addGame(state.games, state.activeYear, action.response) }
    default:
      return state
  }
}

export const select = register('games', trackYearReducer.merge(games))
