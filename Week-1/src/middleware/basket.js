import {saveState} from '~/src/middleware/cartPersistence.js'
import * as BasketActionTypes from '~/src/actiontypes/Basket.js'

export default (store) => (next) => (action) => {

  if (action.type === BasketActionTypes.ADD_TO_BASKET){
    console.log(`current product ${action.product.title}`)
    saveState([...store.getState().basket.items, action.product])
  }
  else if (action.type === BasketActionTypes.EMPTY_CART){
    saveState([])
  }
  return next(action)
}
