import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Modal from 'react-bootstrap-modal'

import { createBook, openForm, closeForm } from './actions'
import { select } from './reducers'

import Form from './form'

import styles from './styles.css'

class BookCreator extends React.Component {
  constructor () {
    super()

    this.attachNode = this.attachNode.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  attachNode (node) {
    this._form = ReactDOM.findDOMNode(node)
  }

  handleClick () {
    this._form.submit()
  }

  handleSubmit (book) {
    this.props.createBook(book)
  }

  render () {
    return (
      <div>
        <button type='button' className={classNames('btn', 'btn-success', styles.toggleButton)} onClick={() => this.props.openForm()}>
          <i className='fa fa-plus fa-lg' />
          Add Book
        </button>

        <Modal show={this.props.opened} onHide={() => this.props.closeForm()} className={`${styles.modal}`}>
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form attachNode={this.attachNode} onSubmit={this.handleSubmit} />
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-primary m-r-1' onClick={this.handleClick}>Create</button>
            <Modal.Dismiss className='btn btn-secondary'>Cancel</Modal.Dismiss>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

BookCreator.propTypes = {
  opened: PropTypes.bool.isRequired,
  createBook: PropTypes.func.isRequired,
  openForm: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired
}

export default connect(select, { createBook, openForm, closeForm })(BookCreator)
