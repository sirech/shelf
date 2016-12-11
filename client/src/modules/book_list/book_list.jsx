import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchBooks } from './actions'
import { select } from './reducers'

import BookCreator from '../book_creator'
import { CREATE_BOOK_SUCCESS } from '../book_creator/actions'
import connectNavigation from '../navigation'
import Category from './category'

const Navigation = connectNavigation('books', CREATE_BOOK_SUCCESS)

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

  groupByCategory (books) {
    let groups = new Map()

    for (const book of books) {
      if (!groups.has(book.category)) {
        groups.set(book.category, [])
      }

      groups.get(book.category).push(book)
    }

    return groups
  }

  renderCategoryGroups (groups) {
    let categories = []

    for (let [category, books] of groups.entries()) {
      categories.push(<Category key={category} name={category} books={books} />)
    }

    return categories
  }

  render () {
    const { books } = this.props
    return (
      <div className='row' >
        <div className='col-sm-8 col-md-9 col-lg-10'>
          <BookCreator />
          {this.renderCategoryGroups(this.groupByCategory(books))}
        </div>
        <div className='col-sm-4 col-md-3 col-lg-2'>
          <Navigation entity={'books'} />
        </div>
      </div>
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
