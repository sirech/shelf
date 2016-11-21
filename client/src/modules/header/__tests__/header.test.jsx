import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../header'

describe('components', () => {
  describe('Header', () => {
    it('renders correctly', () => {
      const header = renderer.create(<Header />)
      expect(header.toJSON()).toMatchSnapshot()
    })
  })
})
