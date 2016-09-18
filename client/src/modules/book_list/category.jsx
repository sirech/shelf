import React, { PropTypes } from 'react'

import Book from './book'

import styles from './styles.css'

const Category = ({name, books}) => (
  <div className={`${styles.category} card`}>
    <div className='card-header'>
      <h4>{name}</h4>
    </div>
    <div className='card-block'>
      <ul className='list-unstyled'>
        {books.map((book) =>
          <Book key={book.id} {...book} />
         )}
      </ul>
    </div>
  </div>
)

Category.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}

export default Category
