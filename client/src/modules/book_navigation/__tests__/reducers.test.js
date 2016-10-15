import { years } from './../reducers'
import { normalizedYears } from './../fixtures/years'
import { RECEIVE_YEARS } from '../actions'
import { CREATE_BOOK_SUCCESS } from '../../book_creator/actions'

describe('book_navigation reducers', () => {
  it('returns the initial state', () => {
    expect(years(undefined, {})).toEqual({})
  })

  it('handles RECEIVE_YEARS', () => {
    expect(years({}, {
      type: RECEIVE_YEARS,
      years: normalizedYears
    })).toEqual(normalizedYears)
  })

  describe('CREATE_BOOK_SUCCESS', () => {
    const action = {
      type: CREATE_BOOK_SUCCESS,
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
