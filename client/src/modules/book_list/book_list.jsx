import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchBooks } from './actions'
import { select } from './reducers'

import Book from './book'

class BookList extends React.Component {
  componentDidMount () {
    this.props.fetchBooks(this.props.params.year)
  }

  componentWillUpdate (nextProps) {
    const year = this.props.params.year
    const newYear = nextProps.params.year

    if (year && year !== newYear) {
      this.props.fetchBooks(newYear)
    }
  }

  render () {
    const { books } = this.props
    return (
      <ul className='list-unstyled col-sm-8'>
        {books.map(book =>
          <Book key={book.id} {...book} />
        )}
      </ul>
    )
  }
}

BookList.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
}

BookList.defaultProps = {
  books: []
}

export default connect(select, { fetchBooks })(BookList)
