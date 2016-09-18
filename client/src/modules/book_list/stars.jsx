import React, { PropTypes } from 'react'

import styles from './styles.css'

const Stars = ({count}) => (
  <span className={`${styles.stars}`}>
    {[...Array(5).keys()].map((i) =>
      <i key={i} className={`fa  ${i >= count ? 'fa-star-o' : 'fa-star'}`} />
     )}
  </span>
)

Stars.propTypes = {
  count: PropTypes.number.isRequired
}

export default Stars
