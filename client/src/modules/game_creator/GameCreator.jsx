import connectCreator from '../creator/Creator.jsx'
import Form from './Form'

const initialState = {
  title: '',
  year: new Date().getFullYear(),
  description: '',
  stars: 1
}

const entity = 'games'
const headline = 'Add Game'

export default connectCreator({ entity, Form, initialState, headline })
