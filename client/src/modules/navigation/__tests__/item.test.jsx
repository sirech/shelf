import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Item from '../item'

const itemRenderer = (renderFunction) => {
  return (entity, activeYear = 2015) => {
    const props = {
      year: 2016,
      count: 2,
      activeYear: activeYear,
      entity: entity
    }

    return renderFunction(props)
  }
}

const item = itemRenderer((props) => renderer.create(<Item {...props} />))

describe('components', () => {
  describe('Item', () => {
    it('renders', () => {
      expect(item('books').toJSON()).toMatchSnapshot()
    })

    it('renders for the active item', () => {
      expect(item('books', 2016).toJSON()).toMatchSnapshot()
    })

    it('takes the entity into account for the link', () => {
      const element = itemRenderer((props) => shallow(<Item {...props} />))
      expect(element('games').find('Link').props().to).toEqual('/games/2016')
      expect(element('books').find('Link').props().to).toEqual('/books/2016')
    })
  })
})
