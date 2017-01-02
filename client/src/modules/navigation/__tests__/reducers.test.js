import { navigationReducer } from './../reducers'
import { normalizedYears } from './../fixtures/years'
import { actionType } from '../actions'

const years = navigationReducer('books', actionType('books', 'success'))

describe('navigation reducers', () => {
  it('returns the initial state', () => {
    expect(years(undefined, {})).toEqual({})
  })

  it('handles RECEIVE_YEARS', () => {
    expect(years({}, {
      type: actionType('books', 'receive'),
      years: normalizedYears
    })).toEqual(normalizedYears)
  })

  describe('handles CREATION_BOOK_SUCCESS', () => {
    const action = {
      type: actionType('books', 'success'),
      response: { year: 2016 }
    }

    it('creates a new year if none is present', () => {
      expect(years({ result: [], entities: { years: {} } }, action)).toEqual({
        result: [2016],
        entities: {
          years: {
            2016: {
              count: 1,
              year: 2016
            }
          }
        }
      })
    })

    it('counts up the number of years', () => {
      expect(years(normalizedYears, action)).toEqual({
        result: [2015, 2016],
        entities: {
          years: {
            2015: {
              count: 1,
              year: 2015
            },
            2016: {
              count: 4,
              year: 2016
            }
          }
        }
      })
    })
  })
})
