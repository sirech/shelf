import React, { PropTypes } from 'react';
import classNames from 'classnames'

import styles from './styles.css'

const Stars = ({count, handleClick}) => (
  <span className={`${styles.stars}`}>
    {[...Array(5).keys()].map((i) =>
      <i key={i} onClick={() => handleClick(i + 1)} className={classNames('fa', { 'fa-star-o': i >= count, 'fa-star': i < count })} />
     )}
  </span>
)

Stars.propTypes = {
  count: PropTypes.number,
  handleClick: PropTypes.func
}

Stars.defaultProps = {
  count: 1,
  handleClick: (e) => e
}

export default Stars
