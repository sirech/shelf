import { register } from 'hops'

import { actionType } from './../actions'
import { trackYearReducer } from '../../utils/years'

import { updateCounter } from './inserters'

export function navigationReducer (entity, createMessage) {
  const receiveMessage = actionType(entity, 'receive')

  return (state = {}, action) => {
    switch (action.type) {
    case receiveMessage:
      return { ...state, ...action.years }
    case createMessage:
      return updateCounter(state, action.response.year)
    default:
      return state
    }
  }
}

const registerNavigationReducer = (entity, createMessage) => {
  const years = navigationReducer(entity, createMessage)
  return register(`${entity}:years`, trackYearReducer.merge(years))
}

export default registerNavigationReducer
