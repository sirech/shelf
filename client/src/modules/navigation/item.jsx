import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

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

export default Item
