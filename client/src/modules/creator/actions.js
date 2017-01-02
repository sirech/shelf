import fetch from 'isomorphic-fetch'
import { actions } from 'react-redux-form'

import prepareUrl from '../utils/url'
import { modelName } from './form_utils'

export const actionType = (entity, type) => `creator:${entity}:${type}`

const created = (entity, response) => ({
  type: actionType(entity, 'success'),
  response: response
})

const creationFailed = (entity, error) => ({
  type: actionType(entity, 'failed'),
  error: error
})

export const openForm = (entity) => ({
  type: actionType(entity, 'open')
})

export const closeForm = (entity) => ({
  type: actionType(entity, 'close')
})

export function create (entity, item) {
  return (dispatch) => {
    const url = prepareUrl(`/rest/${entity}`)
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const method = 'POST'
    const body = JSON.stringify({ item })

    return fetch(url, { headers, method, body })
      .then(response => {
        if (response.status === 422) {
          return response.json().then(err => { throw err })
        }
        return response
      })
      .then(response => response.json())
      .then(data => dispatch(created(entity, data)))
      .then(() => dispatch(resetForm(entity)))
      .catch(error => dispatch(creationFailed(entity, error)))
  }
}

function resetForm (entity) {
  return (dispatch) => {
    dispatch(actions.reset(modelName(entity)))
  }
}

export function createChangeStars (entity) {
  return (count) => {
    return (dispatch) => {
      dispatch(actions.change(modelName(entity, 'stars'), count))
    }
  }
}
