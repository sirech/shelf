import React from 'react'
import { Link } from 'react-router'

const Header = () => (
  <header>
    <nav className='navbar navbar-fixed-top navbar-dark bg-inverse'>
      <ul className='nav navbar-nav'>
        <li className='navbar-item'>
          <Link to='/' className='navbar-brand'>Shelf</Link>
        </li>
        <li className='nav-item'>
          <Link to='/books' className='nav-link'>Books</Link>
        </li>
        <li className='nav-item'>
          <Link to='/games' className='nav-link'>Games</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
