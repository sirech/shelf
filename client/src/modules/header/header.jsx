import React from 'react'
import { Link } from 'react-router'

const Header = () => (
  <header>
    <nav className='navbar navbar-fixed-top navbar-inverse bg-inverse navbar-toggleable-md'>
      <div className='navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/' className='navbar-brand'>Shelf</Link>
          </li>
          <li className='nav-item ml-2'>
            <Link to='/books' className='nav-link'>Books</Link>
          </li>
          <li className='nav-item ml-2'>
            <Link to='/games' className='nav-link'>Games</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header
