import React, { PropTypes } from 'react'
import { Route } from 'react-router'

import styles from './styles.css'

import BookList from './modules/book_list'
import Header from './modules/header'

class Shell extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className={`container-fluid ${styles.container}`}>
          <div className='row'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

Shell.propTypes = {
  children: PropTypes.node
}

export default (
  <Route path='/' component={Shell}>
    <Route path='/books/:year' component={BookList} />
  </Route>
)
