import React from 'react'
import { shallow } from 'enzyme'
import Header from '../header'

const header = () => {
  return shallow(<Header />)
}

describe('components', () => {
  describe('Header', () => {
    it('renders', () => {
      expect(header().length).toEqual(1)
    })

    it('links correctly', () => {
      const links = header().find('Link').map(node => node.props().to)
      expect(links).toEqual(['/', '/books', '/games'])
    })
  })
})
