import update from 'react-addons-update'

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

export function updateCounter (state, year) {
  if (!state.entities.years[year]) {
    state = insertEntity(state, 'years', { year: year, count: 0 }, 'year')
    state = insertResult(state, year, (e) => parseInt(e) < parseInt(year))
  }

  return update(state, { entities: { years: { [year]: { count: { $apply: (n) => n + 1 } } } } })
}
