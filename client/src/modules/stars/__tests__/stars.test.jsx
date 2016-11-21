import React from 'react'
import renderer from 'react-test-renderer'

import Stars from '../stars'

describe('components', () => {
  describe('Stars', () => {
    it('renders correctly', () => {
      const stars = renderer.create(<Stars count={3} />)
      expect(stars.toJSON()).toMatchSnapshot()
    })
  })
})
