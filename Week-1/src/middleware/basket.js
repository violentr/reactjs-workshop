import {saveState} from '~/src/shared/cartPersistence.js'
import * as BasketActionTypes from '~/src/actiontypes/Basket.js'

export default (store) => (next) => (action) => {

  if (action.type === BasketActionTypes.ADD_TO_BASKET){
    console.log(`current product ${action.product.title}`)
    saveState([...store.getState().basket.items, action.product])
  }
  return next(action)
}
