import update from 'react-addons-update'
import { register } from 'hops'

import { RECEIVE_YEARS } from './actions'
import { CREATE_BOOK_SUCCESS } from '../book_creator/actions'
import { trackYearReducer } from '../utils/years'

function insertEntity (state, entityName, newEntity, key = 'id') {
  return update(state, {
    entities: {
      [entityName]: {
        $merge: { [newEntity[key]]: newEntity }
      }
    }
  })
}

function insertResult (state, result, comesAfterNewElement) {
  let index = 0
  for (; index < state.result.length; index++) {
    if (comesAfterNewElement(state.result[index])) {
      break
    }
  }

  return update(state, {
    result: {
      $splice: [[index, 0, result]]
    }
  })
}

function updateCounter (state, year) {
  if (!state.entities.years[year]) {
    state = insertEntity(state, 'years', { year: year, count: 0 }, 'year')
    state = insertResult(state, year, (e) => parseInt(e) < parseInt(year))
  }

  return update(state, { entities: { years: { [year]: { count: { $apply: (n) => n + 1 } } } } })
}

function years (state = {}, action) {
  switch (action.type) {
  case RECEIVE_YEARS:
    return { ...state, ...action.years }
  case CREATE_BOOK_SUCCESS:
    return updateCounter(state, action.response.year)
  default:
    return state
  }
}

export const select = register('years', trackYearReducer.merge(years))
