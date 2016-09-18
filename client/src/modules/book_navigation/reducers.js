import { register } from 'hops'
import { RECEIVE_YEARS } from './actions'

function years (state = {}, action) {
  switch (action.type) {
    case RECEIVE_YEARS:
      return { ...state, years: action.years }
    default:
      return state
  }
}

export const select = register('years', years)
