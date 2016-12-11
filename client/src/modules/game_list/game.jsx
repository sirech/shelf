import React, { PropTypes } from 'react'

import Stars from './../stars'

import styles from './styles.css'

class Game extends React.Component {
  render () {
    const { title, stars } = this.props

    return (
      <li className={`${styles.game} list-group-item`}>
        <h5>{title}</h5>
        <Stars count={stars} />
      </li>
    )
  }
}

Game.propTypes = {
  title: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
}

export default Game
