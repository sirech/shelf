import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchBooks } from './actions'
import { select } from './reducers'

import Category from './category'

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
      <div className='col-sm-8'>
        {this.renderCategoryGroups(this.groupByCategory(books))}
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
