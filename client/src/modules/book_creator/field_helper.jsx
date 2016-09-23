import React, { PropTypes } from 'react'
import { Field } from 'react-redux-form'

const FieldHelper = ({name, children}) => (
  <Field model={`newBook.${name}`} >
    <div className='form-group' >
      <label htmlFor={`book_${name}`}>{name}</label>
      {children}
    </div>
  </Field>
)

FieldHelper.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default FieldHelper
