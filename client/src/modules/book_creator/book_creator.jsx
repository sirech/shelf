import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Modal from 'react-bootstrap-modal'

import './reducers'

import Form from './form'

import styles from './styles.css'

class BookCreator extends React.Component {
  constructor () {
    super()

    this.state = { modalOpen: false }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

    this.attachNode = this.attachNode.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  openModal () {
    this.setState({ modalOpen: true })
  }

  closeModal () {
    this.setState({ modalOpen: false })
  }

  attachNode (node) {
    this._form = ReactDOM.findDOMNode(node)
  }

  handleClick () {
    this._form.submit()
  }

  handleSubmit (book) {
  }

  render () {
    return (
      <div>
        <button type='button' className={classNames('btn', 'btn-success', styles.toggleButton)} onClick={this.openModal}>
          <i className='fa fa-plus fa-lg' />
          Add Book
        </button>

        <Modal show={this.state.modalOpen} onHide={this.closeModal} className={`${styles.modal}`}>
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

export default BookCreator
