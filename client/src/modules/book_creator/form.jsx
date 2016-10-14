import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Form as FormBuilder } from 'react-redux-form'

import FieldHelper from './field_helper'
import Input from './input'
import Stars from './../stars'

import { changeStars } from './actions'

import styles from './styles.css'

class Form extends React.Component {
  render () {
    const { stars, onSubmit, bindForm } = this.props
    return (
      <div className='container' >
        <FormBuilder model='newBook' className={`${styles.form}`} onSubmit={onSubmit} ref={bindForm}>
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
  stars: state.newBook.stars
})

export default connect(mapStateToProps, { changeStars })(Form)
