import React from 'react'
import classNames from 'classnames'
import Modal from 'react-bootstrap-modal'

import styles from './styles.css'

class BookCreator extends React.Component {
  constructor () {
    super()
    this.state = { modalOpen: false }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    this.setState({ modalOpen: true })
  }

  closeModal () {
    this.setState({ modalOpen: false })
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
            <Modal.Title id='ModalHeader'>Add Button</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Content
          </Modal.Body>
          <Modal.Footer>
            <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default BookCreator
