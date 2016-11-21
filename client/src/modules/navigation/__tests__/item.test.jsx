import React from 'react'
import renderer from 'react-test-renderer'

import Item from '../item'

const item = (activeYear = 2015) => {
  const props = {
    year: 2016,
    count: 2,
    activeYear: activeYear
  }

  return renderer.create(<Item {...props} />)
}

describe('components', () => {
  describe('Item', () => {
    it('renders', () => {
      expect(item().toJSON()).toMatchSnapshot()
    })

    it('renders for the active item', () => {
      expect(item(2016).toJSON()).toMatchSnapshot()
    })
  })
})
