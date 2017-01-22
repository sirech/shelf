import fetch from 'isomorphic-fetch'
import { normalize, schema } from 'normalizr'

import prepareUrl from './../utils/url'

export const actionType = (entity, type) => `${entity}:years:${type}`

const requestYears = (entity) => ({
  type: actionType(entity, 'request')
})

const receiveYears = (entity, years) => ({
  type: actionType(entity, 'receive'),
  years: years
})

const format = (data) => {
  const years = new schema.Entity('years', {}, { idAttribute: 'year' })
  return normalize(data.reverse(), [ years ])
}

export function fetchYears (entity) {
  return (dispatch) => {
    dispatch(requestYears(entity))

    const url = prepareUrl(`/rest/${entity}/years`)
    const headers = { 'Accept': 'application/json' }

    return fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => format(data))
      .then((data) => dispatch(receiveYears(entity, data)))
  }
}
