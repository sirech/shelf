import React from 'react'
import { Link } from 'react-router'

const Header = () => (
  <header>
    <nav className='navbar navbar-fixed-top navbar-dark bg-inverse'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <Link to='/' className='navbar-brand'>Shelf</Link>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
