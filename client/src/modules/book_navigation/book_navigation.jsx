import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classNames from 'classnames'

import { fetchYears } from './actions'
import { select } from './reducers'

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
    const { active, years } = this.props
    return (
      <div className='list-group'>
        {years.map((year) =>
          <Item key={year.year} year={year.year} count={year.count} activeYear={active} />
         )}
      </div>
    )
  }
}

BookNavigation.propTypes = {
  active: PropTypes.number.isRequired,
  fetchYears: PropTypes.func.isRequired,
  years: PropTypes.array.isRequired
}

BookNavigation.defaultProps = {
  years: []
}

export default connect(select, { fetchYears })(BookNavigation)
