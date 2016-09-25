import React, { PropTypes } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'

import Book from './book'

import styles from './styles.css'
import animate from './../utils/css/appear.css'

const Category = ({name, books}) => (
  <div className={`${styles.category} card`}>
    <div className='card-header'>
      <h4 className='d-inline-block'>{name}</h4>
    </div>
    <ul className='list-unstyled m-b-0'>
      <CSSTransitionGroup transitionName={animate} transitionEnterTimeout={500} transitionLeaveTimeout={1} >
        {books.map((book) =>
          <Book key={book.id} {...book} />
         )}
      </CSSTransitionGroup>
    </ul>
  </div>
)

Category.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}

export default Category
