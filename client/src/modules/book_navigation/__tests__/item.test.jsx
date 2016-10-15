import React from 'react'
import { shallow } from 'enzyme'
import Item from '../item'

const item = (activeYear = 2015) => {
  const props = {
    year: 2016,
    count: 2,
    activeYear: activeYear
  }

  return shallow(<Item {...props} />)
}

describe('components', () => {
  describe('Item', () => {
    it('renders', () => {
      expect(item().length).toEqual(1)
    })

    it('links to the correct page', () => {
      expect(item().find('Link').props().to).toEqual('/books/2016')
    })

    describe('active', () => {
      it('is false if the item is not active', () => {
        expect(item().hasClass('active')).toBeFalsy()
      })

      it('is true if the item is active', () => {
        expect(item(2016).hasClass('active')).toBeTruthy()
      })
    })
  })
})
