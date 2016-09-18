import { register } from 'hops'
import { RECEIVE_BOOKS } from './actions'

function books (state = {}, action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return { ...state, books: action.books }
    default:
      return state
  }
}

export const select = register('books', books)
