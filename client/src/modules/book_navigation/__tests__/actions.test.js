import { mockStore } from './../../utils/test/mock_store'
import nock from 'nock'

import { fetchYears } from './../actions'

describe('actions', () => {
  let store
  const data = [{ 'year': 2016, count: 3 }, { 'year': 2015, count: 1 }]
  const normalizedData = {
    'entities': {
      'years': { '2015': { 'count': 1, 'year': 2015 },
                 '2016': { 'count': 3, 'year': 2016 }}},
    'result': [2015, 2016] }

  describe('fetchYears', () => {
    beforeEach(() => {
      nock('http://localhost')
        .get('/rest/books/years')
        .reply(200, data)

      store = mockStore({ years: [] })
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'years:request' },
        { type: 'years:receive', years: normalizedData }
      ]

      return store.dispatch(fetchYears())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})
