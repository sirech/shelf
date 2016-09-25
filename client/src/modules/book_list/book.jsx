import React, { PropTypes } from 'react'

import Stars from './../stars'

import styles from './styles.css'

class Book extends React.Component {
  render () {
    const { title, stars } = this.props

    return (
      <li className={`${styles.book}`}>
        <h5>{title}</h5>
        <Stars count={stars} />
      </li>
    )
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
}

export default Book
