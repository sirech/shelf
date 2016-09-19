import { register } from 'hops'
import { formReducer, modelReducer } from 'react-redux-form'

const initialState = {
  title: '',
  year: new Date().getFullYear,
  description: '',
  stars: 1
}

register('newBook', modelReducer('newBook', initialState))
register('bookForm', formReducer('bookForm', initialState))
