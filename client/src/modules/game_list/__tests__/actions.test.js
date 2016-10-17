import { mockStore } from './../../utils/test/mock_store'
import nock from 'nock'

import { games } from './../fixtures/games'
import { fetchGames } from './../actions'

describe('actions', () => {
  let store

  describe('fetchGames', () => {
    beforeEach(() => {
      nock('http://localhost')
        .get('/rest/games?year=2016')
        .reply(200, games)

      store = mockStore({ years: [] })
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'games:request' },
        { type: 'games:receive', games: games }
      ]

      return store.dispatch(fetchGames(2016))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})
