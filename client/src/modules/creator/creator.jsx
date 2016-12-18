import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

import classNames from 'classnames'
import { Modal, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter } from 'react-modal-bootstrap'
import wrapDisplayName from 'recompose/wrapDisplayName'

import { create, openForm, closeForm } from './actions'
import { formName, ownReducerName } from './form_utils'
import registerCreatorReducer from './reducers'

import styles from './styles.css'

export const creatorFactory = ({entity, Form, headline}) => {
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
      this.props.create(entity, item)
    }

    render () {
      const { disabled } = this.props
      return (
        <div>
          <button type='button' className={classNames('btn', 'btn-success', styles.toggleButton)} onClick={() => this.props.openForm(entity)}>
            <i className='fa fa-plus fa-lg' />
            {headline}
          </button>

          <Modal isOpen={this.props.opened} onRequestHide={() => this.props.closeForm(entity)} className={`${styles.modal}`}>
            <ModalHeader>
              <ModalClose onClick={() => this.props.closeForm(entity)} />
              <ModalTitle>{headline}</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <Form bindForm={this.bindForm} onSubmit={this.handleSubmit} />
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
    openForm: PropTypes.func.isRequired,
    opened: PropTypes.bool.isRequired
  }

  Creator.displayName = wrapDisplayName(Creator, entity)
  return Creator
}

const mapStateToPropsFactory = (entity) => {
  return (state) => ({
    opened: state[ownReducerName(entity)].opened,
    disabled: !state[formName(entity)].$form.valid || state[formName(entity)].$form.submitted
  })
}

const connectCreator = ({entity, Form, headline, initialState}) => {
  registerCreatorReducer(entity, initialState)
  return connect(mapStateToPropsFactory(entity), { create, openForm, closeForm })(creatorFactory({ entity, Form, headline }))
}

export default connectCreator
