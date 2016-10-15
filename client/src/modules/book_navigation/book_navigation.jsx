import React, { PropTypes } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'

import { fetchYears } from './actions'
import { select } from './reducers'

import Item from './item'
import animate from './../utils/css/appear.css'

class BookNavigation extends React.Component {
  componentDidMount () {
    this.props.fetchYears()
  }

  render () {
    const { activeYear, result, entities } = this.props
    return (
      <div className='list-group'>
        <CSSTransitionGroup transitionName={animate} transitionEnterTimeout={1000} transitionLeaveTimeout={1} >
          {result.map((year) =>
            <Item key={year} activeYear={activeYear} {...entities.years[year]} />
           )}
        </CSSTransitionGroup>
      </div>
    )
  }
}

BookNavigation.propTypes = {
  activeYear: PropTypes.number.isRequired,
  result: PropTypes.array.isRequired,
  entities: PropTypes.object.isRequired,
  fetchYears: PropTypes.func.isRequired
}

BookNavigation.defaultProps = {
  result: [],
  entities: {}
}

export default connect(select, { fetchYears })(BookNavigation)
