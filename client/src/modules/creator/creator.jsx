import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Modal, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter } from 'react-modal-bootstrap'

import { create, openForm, closeForm } from './actions'
import registerCreatorReducer from './reducers'

import styles from './styles.css'

class Creator extends React.Component {
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

  handleSubmit (item) {
    this.props.create(this.props.entity, item)
  }

  render () {
    const { disabled, entity } = this.props
    return (
      <div>
        <button type='button' className={classNames('btn', 'btn-success', styles.toggleButton)} onClick={() => this.props.openForm(entity)}>
          <i className='fa fa-plus fa-lg' />
          {this.props.headline}
        </button>

        <Modal isOpen={this.props.opened} onRequestHide={() => this.props.closeForm(entity)} className={`${styles.modal}`}>
          <ModalHeader>
            <ModalClose onClick={() => this.props.closeForm(entity)} />
            <ModalTitle>{this.props.headline}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <this.props.form bindForm={this.bindForm} onSubmit={this.handleSubmit} />
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-primary m-r-1' onClick={this.handleClick} disabled={disabled} >Create</button>
            <button className='btn btn-default' onClick={() => this.props.closeForm(entity)}>Cancel</button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

Creator.propTypes = {
  closeForm: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  entity: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  headline: PropTypes.string.isRequired,
  openForm: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired
}

const connectCreator = (entity) => {
  const select = registerCreatorReducer(entity)
  return connect(select, { create, openForm, closeForm })(Creator)
}

export default connectCreator
