import { register } from 'hops'
import { formReducer, modelReducer } from 'react-redux-form'

import { actionType } from './actions'
import { modelName, formName } from './form_utils'

export function creatorReducer (entity) {
  return (state = { opened: false }, action) => {
    switch (action.type) {
    case actionType(entity, 'open'):
      return {...state, opened: true}
    case actionType(entity, 'close'):
    case actionType(entity, 'success'):
      return {...state, opened: false}
    default:
      return state
    }
  }
}

const registerCreatorReducer = (entity, initialState) => {
  register(modelName(entity), modelReducer(modelName(entity), initialState))
  register(formName(entity), formReducer(modelName(entity), initialState))

  return register(`creator-${entity}`, creatorReducer(entity))
}

export default registerCreatorReducer
