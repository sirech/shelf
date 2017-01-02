import React, { PropTypes } from 'react'
import { Field } from 'react-redux-form'

import { modelName } from '../creator/form_utils'

const createFieldHelper = (entity) => {
  const model = modelName(entity)

  const FieldHelper = ({name, children}) => (
    <Field model={`${model}.${name}`} >
      <div className='form-group' >
        <label htmlFor={`${entity}_${name}`}>{name}</label>
        {children}
      </div>
    </Field>
  )

  FieldHelper.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node
  }

  return FieldHelper
}

export default createFieldHelper
