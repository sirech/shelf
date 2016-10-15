import fetch from 'isomorphic-fetch'
import { normalize, Schema, arrayOf } from 'normalizr'

import prepareUrl from './../utils/url'

export const REQUEST_YEARS = 'years:request'
export const RECEIVE_YEARS = 'years:receive'

const requestYears = () => ({
  type: REQUEST_YEARS
})

const receiveYears = (years) => ({
  type: RECEIVE_YEARS,
  years: years
})

const format = (data) => {
  const schema = new Schema('years', { idAttribute: 'year' })
  return normalize(data.reverse(), arrayOf(schema))
}

export function fetchYears () {
  return (dispatch) => {
    dispatch(requestYears())

    const url = prepareUrl('/rest/books/years')
    const headers = { 'Accept': 'application/json' }

    return fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => format(data))
      .then((data) => dispatch(receiveYears(data)))
  }
}
