import { creatorReducer } from '../reducers'
import { actionType } from '../actions'

const creator = creatorReducer('games')

describe('creator reducers', () => {
  it('returns the initial state', () => {
    expect(creator(undefined, {})).toEqual({ opened: false })
  })

  it('handles OPEN', () => {
    expect(creator({}, {
      type: actionType('games', 'open')
    })).toEqual({ opened: true })
  })

  it('ignores other entities', () => {
    expect(creator({}, {
      type: actionType('books', 'open')
    })).toEqual({})
  })

  it('handles CLOSE', () => {
    expect(creator({ opened: true }, {
      type: actionType('games', 'close')
    })).toEqual({ opened: false })
  })

  it('handles SUCCESS', () => {
    expect(creator({ opened: true }, {
      type: actionType('games', 'success')
    })).toEqual({ opened: false })
  })
})
