import React, { PropTypes } from 'react'

import Book from './book'

import styles from './styles.css'

const Category = ({name, books}) => (
  <div className={`${styles.category} card`}>
    <div className='card-header'>
      <h4 className='d-inline-block'>{name}</h4>
      <span className='tag tag-warning tag-pill pull-xs-right'>{books.length}</span>
    </div>
    <ul className='list-unstyled m-b-0'>
      {books.map((book) =>
        <Book key={book.id} {...book} />
       )}
    </ul>
  </div>
)

Category.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}

export default Category
