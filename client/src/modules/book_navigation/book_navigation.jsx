import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { fetchYears } from './actions'
import { select } from './reducers'

import styles from './styles.css'

const Item = ({year, activeYear}) => (
  <Link key={year} to={`/books/${year}`} className={`list-group-item list-group-item-action ${activeYear === year ? 'active' : ''}`}>
    <span>{year}</span>
  </Link>
)

Item.propTypes = {
  year: PropTypes.number.isRequired,
  activeYear: PropTypes.number.isRequired
}

class BookNavigation extends React.Component {
  componentDidMount () {
    this.props.fetchYears()
  }

  render () {
    const { active, years } = this.props
    return (
      <div className={`list-group ${styles.navigation}`}>
        {years.map((year) =>
          <Item key={year} year={year} activeYear={active} />
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
