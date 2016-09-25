import { register } from 'hops'
import { formReducer, modelReducer } from 'react-redux-form'
import { OPEN_BOOK_FORM, CLOSE_BOOK_FORM, CREATE_BOOK_SUCCESS } from './actions'

export const REDUCER_FORM = 'redux-bookForm'
export const REDUCER_MODEL = 'newBook'

const initialState = {
  title: '',
  year: new Date().getFullYear(),
  description: '',
  stars: 1
}

register(REDUCER_MODEL, modelReducer(REDUCER_MODEL, initialState))
register(REDUCER_FORM, formReducer(REDUCER_MODEL, initialState))

function bookForm (state = { opened: false }, action) {
  switch (action.type) {
  case OPEN_BOOK_FORM:
    return {...state, opened: true}
  case CLOSE_BOOK_FORM:
  case CREATE_BOOK_SUCCESS:
    return {...state, opened: false}
  default:
    return state
  }
}

export const select = register('bookForm', bookForm)
