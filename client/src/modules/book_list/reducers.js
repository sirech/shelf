import update from 'react-addons-update'
import { register } from 'hops'
import { RECEIVE_BOOKS } from './actions'
import { actionType } from '../creator/actions'

import { trackYearReducer } from '../utils/years'

function addBook (books, activeYear, book) {
  if (activeYear !== book.year) {
    return books
  }

  return update(books, { $push: Array(book) })
}

function books (state = {}, action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return { ...state, books: action.books }
    case actionType('books', 'success'):
      return { ...state, books: addBook(state.books, state.activeYear, action.response) }
    default:
      return state
  }
}

export const select = register('books', trackYearReducer.merge(books))
