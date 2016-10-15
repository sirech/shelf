import { mockStore } from './../../utils/test/mock_store'
import nock from 'nock'

import { years, normalizedYears } from './../fixtures/years'
import { fetchYears } from './../actions'

describe('actions', () => {
  let store

  describe('fetchYears', () => {
    beforeEach(() => {
      nock('http://localhost')
        .get('/rest/books/years')
        .reply(200, years)

      store = mockStore({ years: [] })
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'years:request' },
        { type: 'years:receive', years: normalizedYears }
      ]

      return store.dispatch(fetchYears())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})
