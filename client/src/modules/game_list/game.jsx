import React, { PropTypes } from 'react'

import Stars from './../stars'

import styles from './styles.css'

class Game extends React.Component {
  render () {
    const { title, platform, stars } = this.props

    return (
      <li className={`${styles.game} list-group-item`}>
        <div className={styles.gameInfo} >
          <h5>{title}</h5>
          <h6 className='font-italic'>{platform}</h6>
        </div>
        <Stars count={stars} />
      </li>
    )
  }
}

Game.propTypes = {
  title: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
}

export default Game
