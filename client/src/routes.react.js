import React, { PropTypes } from 'react'
import { Route, Redirect } from 'react-router'

import styles from './styles.css'

import BookList from './modules/book_list'
import GameList from './modules/game_list'
import Header from './modules/header'

class Shell extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className={`container-fluid ${styles.container}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Shell.propTypes = {
  children: PropTypes.node
}

const year = new Date().getFullYear()

export default (
  <Route path='/' component={Shell}>
    <Route path='/books/:year' component={BookList} />
    <Redirect from='/books' to={`/books/${year}`} />
    <Route path='/games/:year' component={GameList} />
    <Redirect from='/games' to={`/games/${year}`} />
  </Route>
)
