import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Modal, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter } from 'react-modal-bootstrap'

import { createBook, openForm, closeForm } from './actions'
import { REDUCER_FORM } from './reducers'

import Form from './form'

import styles from './styles.css'

class BookCreator extends React.Component {
  constructor () {
    super()

    this.bindForm = this.bindForm.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  bindForm (node) {
    this._form = ReactDOM.findDOMNode(node)
  }

  handleClick () {
    this._form.submit()
  }

  handleSubmit (book) {
    this.props.createBook(book)
  }

  render () {
    const { disabled } = this.props
    return (
      <div>
        <button type='button' className={classNames('btn', 'btn-success', styles.toggleButton)} onClick={() => this.props.openForm()}>
          <i className='fa fa-plus fa-lg' />
          Add Book
        </button>

        <Modal isOpen={this.props.opened} onRequestHide={() => this.props.closeForm()} className={`${styles.modal}`}>
          <ModalHeader>
            <ModalClose onClick={() => this.props.closeForm()} />
            <ModalTitle>Add Book</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Form bindForm={this.bindForm} onSubmit={this.handleSubmit} />
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-primary m-r-1' onClick={this.handleClick} disabled={disabled} >Create</button>
            <button className='btn btn-default' onClick={() => this.props.closeForm()}>Cancel</button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

BookCreator.propTypes = {
  opened: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  createBook: PropTypes.func.isRequired,
  openForm: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  opened: state.bookForm.opened,
  disabled: !state[REDUCER_FORM].$form.valid || state[REDUCER_FORM].$form.submitted
})

export default connect(mapStateToProps, { createBook, openForm, closeForm })(BookCreator)
