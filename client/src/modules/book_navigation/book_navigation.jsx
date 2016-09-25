import React, { PropTypes } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classNames from 'classnames'

import { fetchYears } from './actions'
import { select } from './reducers'

import animate from './../utils/css/appear.css'

const Item = ({year, count, activeYear}) => (
  <Link key={year} to={`/books/${year}`} className={classNames('list-group-item', 'list-group-item-action', { 'active': activeYear === year })}>
    <span>{year}</span>
    <span className='tag tag-warning tag-pill pull-xs-right'>{count}</span>
  </Link>
)

Item.propTypes = {
  year: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  activeYear: PropTypes.number.isRequired
}

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
  fetchYears: PropTypes.func.isRequired,
  result: PropTypes.array.isRequired,
  entities: PropTypes.object.isRequired
}

BookNavigation.defaultProps = {
  result: [],
  entities: {}
}

export default connect(select, { fetchYears })(BookNavigation)
