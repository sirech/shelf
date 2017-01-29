import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'

import { fetchGames } from './actions'
import { select } from './reducers'

import GameCreator from '../game_creator'
import Game from './game'
import { CREATE_GAME_SUCCESS } from '../game_creator/actions'
import connectNavigation from '../navigation'

import animate from './../utils/css/appear.css'

const Navigation = connectNavigation('games', CREATE_GAME_SUCCESS)

class GameList extends React.Component {
  componentDidMount () {
    this.props.fetchGames(this.props.params.year)
  }

  componentWillUpdate (nextProps) {
    const year = this.props.params.year
    const newYear = nextProps.params.year

    if (year && year !== newYear) {
      this.props.fetchGames(newYear)
    }
  }

  render () {
    const { games } = this.props

    return (
      <div className='row' >
        <div className='col-sm-8 col-md-9 col-lg-10'>
          <GameCreator />
          <ul className='list-group list-unstyled m-b-0'>
            <CSSTransitionGroup transitionName={animate} transitionEnterTimeout={500} transitionLeaveTimeout={1} >
              {games.map(game =>
                <Game key={game.id} {...game} />
               )}
            </CSSTransitionGroup>
          </ul>
        </div>
        <div className='col-sm-4 col-md-3 col-lg-2'>
          <Navigation entity={'games'} />
        </div>
      </div>
    )
  }
}

GameList.propTypes = {
  fetchGames: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  games: PropTypes.array.isRequired
}

GameList.defaultProps = {
  games: []
}

export default connect(select, { fetchGames })(GameList)
