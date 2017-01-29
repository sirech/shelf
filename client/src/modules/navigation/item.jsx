import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

const Item = ({year, count, activeYear, entity}) => (
  <Link key={year} to={`/${entity}/${year}`} className={classNames('list-group-item', 'list-group-item-action', { active: activeYear === year })}>
    <span>{year}</span>
    <span className='badge badge-warning badge-pill ml-auto'>{count}</span>
  </Link>
)

Item.propTypes = {
  activeYear: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  entity: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
}

export default Item
