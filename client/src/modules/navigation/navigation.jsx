import React, { PropTypes } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'

import { fetchYears } from './actions'
import registerNavigationReducer from './reducers/index'

import Item from './item'
import animate from './../utils/css/appear.css'

class Navigation extends React.Component {
  componentDidMount () {
    this.props.fetchYears(this.props.entity)
  }

  render () {
    const { entity, activeYear, result, entities } = this.props
    return (
      <div className='list-group'>
        <CSSTransitionGroup transitionName={animate} transitionEnterTimeout={1000} transitionLeaveTimeout={1} >
          {result.map(year =>
            <Item key={year} entity={entity} activeYear={activeYear} {...entities.years[year]} />
           )}
        </CSSTransitionGroup>
      </div>
    )
  }
}

Navigation.propTypes = {
  entity: PropTypes.string.isRequired,
  activeYear: PropTypes.number.isRequired,
  result: PropTypes.array.isRequired,
  entities: PropTypes.object.isRequired,
  fetchYears: PropTypes.func.isRequired
}

Navigation.defaultProps = {
  result: [],
  entities: {}
}

const connectNavigation = (entity, createMessage) => {
  const select = registerNavigationReducer(entity, createMessage)
  return connect(select, { fetchYears })(Navigation)
}

export default connectNavigation
