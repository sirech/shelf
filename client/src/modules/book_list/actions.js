import fetch from 'isomorphic-fetch'

export const REQUEST_BOOKS = 'books:request'
export const RECEIVE_BOOKS = 'books:receive'

const requestBooks = () => ({
  type: REQUEST_BOOKS
})

const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
})

export function fetchBooks (year) {
  return (dispatch) => {
    dispatch(requestBooks())

    const url = `/rest/books?year=${year}`
    const headers = { Accept: 'application/json' }

    return fetch(url, { headers })
      .then(response => response.json())
      .then(data => dispatch(receiveBooks(data)))
  }
}
