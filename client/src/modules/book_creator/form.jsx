import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Form as FormBuilder } from 'react-redux-form'

import Stars from './../stars'

import { modelName } from '../creator/form_utils'
import { createChangeStars } from '../creator/actions'
import createInput from '../input'
import createFieldHelper from '../field_helper'
import validations from './validations'
const changeStars = createChangeStars('books')

import styles from './styles.css'

const model = modelName('books')
const Input = createInput('books', validations)
const FieldHelper = createFieldHelper('books')

class Form extends React.Component {
  render () {
    const { stars, onSubmit, bindForm } = this.props
    return (
      <div className='container' >
        <FormBuilder model={model} className={`${styles.form}`} onSubmit={onSubmit} ref={bindForm}>
          <Input name='title' placeholder='Catch-22' references='titleInput' focus />
          <Input name='year' type='number' />

          <FieldHelper name='description'>
            <textarea id='book_description' className='form-control' placeholder="That's some catch, that Catch-22" rows='3' />
            <small className='form-text text-muted'>Optional</small>
          </FieldHelper>

          <FieldHelper name='stars'>
            <div>
              <Stars count={stars} handleClick={this.props.changeStars} />
            </div>
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
  stars: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  bindForm: PropTypes.func.isRequired,
  changeStars: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  stars: state[modelName('books')].stars
})

export default connect(mapStateToProps, { changeStars })(Form)
