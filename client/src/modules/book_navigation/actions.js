import fetch from 'isomorphic-fetch'

export const REQUEST_YEARS = 'years:request'
export const RECEIVE_YEARS = 'years:receive'

const requestYears = () => ({
  type: REQUEST_YEARS
})

const receiveYears = (years) => ({
  type: RECEIVE_YEARS,
  years: years
})

export function fetchYears () {
  return (dispatch) => {
    dispatch(requestYears())

    const url = '/rest/books/years'
    const headers = { 'Accept': 'application/json' }

    return fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => dispatch(receiveYears(data)))
  }
}
