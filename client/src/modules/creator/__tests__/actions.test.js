import { mockStore } from './../../utils/test/mock_store'
import nock from 'nock'

import { games } from '../../game_list/fixtures/games'
import { actionType, create, changeStars } from '../actions'

describe('actions', () => {
  let store

  describe('actionType', () => {
    it('builds the correct action', () => {
      expect(actionType('games', 'success')).toEqual('creator:games:success')
    })
  })

  describe('create', () => {
    beforeEach(() => {
      nock('http://localhost')
        .post('/rest/games', JSON.stringify({ item: games[0] }))
        .reply(200, games[0])

      store = mockStore({})
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('dispatchs the correct actions', () => {
      const expectedActions = [
        { type: 'creator:games:success', response: games[0] },
        { type: 'rrf/reset', model: 'new-games' }
      ]

      return store.dispatch(create('games', games[0]))
                  .then(() => {
                    expect(store.getActions()).toEqual(expectedActions)
                  })
    })
  })

  describe('changeStars', () => {
    beforeEach(() => {
      store = mockStore({})
    })

    it('dispatchs the correct action', () => {
      const expectedActions = [{ type: 'rrf/change', model: 'new-games.stars', value: 3, silent: false, multi: false }]

      store.dispatch(changeStars('games', 3))
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
