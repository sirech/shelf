import { render } from 'hops'
import routes from './routes.react'

export default render({
  routes,
  initialState: global.INITIAL_STATE ? global.INITIAL_STATE : {}
})
