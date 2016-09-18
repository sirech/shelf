import React, { PropTypes } from 'react'
import classNames from 'classnames'

import styles from './styles.css'

const Stars = ({count}) => (
  <span className={`${styles.stars}`}>
    {[...Array(5).keys()].map((i) =>
      <i key={i} className={classNames('fa', { 'fa-star-o': i >= count, 'fa-star': i < count })} />
     )}
  </span>
)

Stars.propTypes = {
  count: PropTypes.number.isRequired
}

export default Stars
