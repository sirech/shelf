import mergeable from 'redux-merge-reducers'

function extractYear (payload) {
  const path = payload.pathname
  return parseInt(path.split('/').reverse()[0])
}

function reducer (state = {}, action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return { ...state, activeYear: extractYear(action.payload) }
    default:
      return state
  }
}

export const trackYearReducer = mergeable(reducer)
