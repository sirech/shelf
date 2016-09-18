import React, { PropTypes } from 'react'
import { IndexRoute, Route } from 'react-router'

import styles from './styles.css'

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

export default (
  <Route path='/' component={Shell}>
  </Route>
)
