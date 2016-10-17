import React from 'react'
import renderer from 'react-test-renderer'

import Game from '../game'

describe('components', () => {
  describe('Game', () => {
    it('renders correctly', () => {
      const game = renderer.create(<Game title='Civ VI' stars={5} />)
      expect(game.toJSON()).toMatchSnapshot()
    })
  })
})
