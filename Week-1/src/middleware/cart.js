import {loadState} from '~/src/middleware/cartPersistence.js'

export default (store) => (next) => (action) => {
  if (!action.type == 'LOAD_CART') return next(action)
  const items = loadState()
  let result = Object.assign({}, action, {items})
  return next(result)
}
