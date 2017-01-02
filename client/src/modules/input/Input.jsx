import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, Errors } from 'react-redux-form'
import classNames from 'classnames'

import { modelName, formName } from '../creator/form_utils'

const createInput = (entity, validations) => {
  const model = modelName(entity)
  const form = formName(entity)

  class Input extends React.Component {
    constructor () {
      super()

      this.bindInput = this.bindInput.bind(this)
    }

    componentDidMount () {
      if (this.props.focus) {
        this._input.focus()
      }
    }

    bindInput (input) {
      if (this.props.focus) {
        this._input = input
      }
    }

    prepareValidations (name) {
      const validators = {}
      const messages = {}
      const validator = validations[name]

      if (validator) {
        validators[name] = validator.validate
        messages[name] = validator.message
      }

      return { validators, messages }
    }

    errorWrapper (props) {
      return (
        <div className='form-control-feedback'>{props.children}</div>
      )
    }

    render () {
      const { name, type, placeholder, hasError } = this.props
      const { validators, messages } = this.prepareValidations(name)

      return (
        <div>
          <Field model={`${model}.${name}`} validators={validators} >
            <div className={classNames('form-group', { 'has-danger': hasError })} >
              <label htmlFor={`${entity}_${name}`}>{name}</label>
              <input type={type} id={`${model}.${name}`} className={classNames('form-control', { 'form-control-danger': hasError })} placeholder={placeholder} ref={this.bindInput} />

              <Errors model={`${model}.${name}`} show='touched' messages={messages} wrapper={this.errorWrapper} />
            </div>
          </Field>
        </div>
      )
    }
  }

  Input.defaultProps = {
    type: 'text',
    focus: false
  }

  Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    focus: PropTypes.bool,
    hasError: PropTypes.bool.isRequired
  }

  const mapStateToProps = (state, ownProps) => {
    const field = state[form][ownProps.name]
    return {
      hasError: !field.valid && field.touched
    }
  }

  return connect(mapStateToProps)(Input)
}

export default createInput
