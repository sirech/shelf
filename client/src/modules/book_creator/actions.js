import fetch from 'isomorphic-fetch'
import { actions } from 'react-redux-form'

export const CREATE_BOOK_REQUESTED = 'books:book:create:requested'
export const CREATE_BOOK_SUCCESS = 'books:book:create:success'
export const CREATE_BOOK_ERROR = 'books:book:create:error'

export const OPEN_BOOK_FORM = 'books:book:form:open'
export const CLOSE_BOOK_FORM = 'books:book:form:close'

const requestCreateBook = () => ({
  type: CREATE_BOOK_REQUESTED
})

const bookCreated = (response) => ({
  type: CREATE_BOOK_SUCCESS,
  response: response
})

const bookCreationFailed = (error) => ({
  type: CREATE_BOOK_ERROR,
  error: error
})

export const openForm = () => ({
  type: OPEN_BOOK_FORM
})

export const closeForm = () => ({
  type: CLOSE_BOOK_FORM
})

export function createBook (book) {
  return (dispatch) => {
    dispatch(requestCreateBook())

    const url = '/rest/books'
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const method = 'POST'
    const body = JSON.stringify({ book })

    return fetch(url, { headers, method, body })
      .then(response => {
        if (response.status === 422) {
          return response.json().then(err => { throw err })
        }
        return response
      })
      .then(response => response.json())
      .then(data => dispatch(bookCreated(data)))
      .catch(error => dispatch(bookCreationFailed(error)))
  }
}

export function changeStars (count) {
  return (dispatch) => {
    dispatch(actions.change('newBook.stars', count))
  }
}
