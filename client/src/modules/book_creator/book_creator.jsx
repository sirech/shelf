import connectCreator from '../creator/Creator.jsx'
import Form from './Form'

const initialState = {
  title: '',
  year: new Date().getFullYear(),
  description: '',
  stars: 1
}

const entity = 'books'
const headline = 'Add Book'

export default connectCreator({ entity, Form, initialState, headline })
