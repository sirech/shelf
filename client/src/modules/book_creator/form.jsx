import React, { PropTypes } from 'react'
import { Form as FormBuilder } from 'react-redux-form'

import FieldHelper from './field_helper'
import Input from './input'

import styles from './styles.css'

class Form extends React.Component {
  render () {
    const { onSubmit, attachNode } = this.props
    return (
      <div className='container' >
        <FormBuilder model='newBook' className={`${styles.form}`} onSubmit={onSubmit} ref={attachNode}>
          <Input name='title' placeholder='Catch-22' references='titleInput' focus />
          <Input name='year' type='number' />

          <FieldHelper name='description'>
            <textarea id='book_description' className='form-control' placeholder="That's some catch, that Catch-22" rows='3' />
            <small className='form-text text-muted'>Optional</small>
          </FieldHelper>

          <FieldHelper name='stars'>
            <select className='form-control' id='book_stars'>
              {[...Array(5).keys()].map((i) =>
                <option key={i}>{i + 1}</option>
               )}
            </select>
          </FieldHelper>

          <FieldHelper name='category'>
            <select className='form-control' id='book_category'>
              {INITIAL_DATA.categories.map((category) =>
                <option key={category}>{category}</option>
               )}
            </select>
          </FieldHelper>
        </FormBuilder>
      </div>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  attachNode: PropTypes.func.isRequired
}

export default Form
