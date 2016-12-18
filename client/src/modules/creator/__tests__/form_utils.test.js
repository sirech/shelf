import { modelName, formName, ownReducerName } from '../form_utils'

describe('form_utils', () => {
  describe('modelName', () => {
    it('builds the right name', () => {
      expect(modelName('games')).toEqual('new-games')
    })

    it('can include fields', () => {
      expect(modelName('games', 'stars')).toEqual('new-games.stars')
    })
  })

  describe('formName', () => {
    it('builds the right name', () => {
      expect(formName('games')).toEqual('redux-games-form')
    })
  })

  describe('ownReducerName', () => {
    it('builds the right name', () => {
      expect(ownReducerName('games')).toEqual('creator-games')
    })
  })
})
