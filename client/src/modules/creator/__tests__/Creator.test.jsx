import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../../game_creator/Form'
import { creatorFactory } from '../Creator'

const Creator = creatorFactory({ entity: 'games', Form, headline: 'Add Game' })

describe('components', () => {
  describe('Creator', () => {
    it('renders correctly', () => {
      const creator = renderer.create(<Creator />)
      expect(creator.toJSON()).toMatchSnapshot()
    })
  })
})
