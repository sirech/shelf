import React, { PropTypes } from 'react'
import { Field, Form as FormBuilder } from 'react-redux-form'

import './reducers'

import styles from './styles.css'

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

class Form extends React.Component {
  render () {
    return (
      <div className='container' >
        <FormBuilder model='newBook' className={`${styles.form}`}>
          <FieldHelper name='title'>
            <input type='text' id='book_title' className='form-control' placeholder='Catch-22' />
          </FieldHelper>

          <FieldHelper name='year'>
            <input type='number' id='book_year' className='form-control' />
          </FieldHelper>

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

export default Form
