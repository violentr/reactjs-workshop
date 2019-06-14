import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '~/src/reducers'
import DevTools from '~/src/containers/DevTools.js'
import {saveState} from '~/src/shared/cartPersistence.js'
import APIMiddleware from '~/src/middleware/Api.js'
import * as BasketActionTypes from '~/src/actiontypes/Basket.js'

const basketMiddleware = (store) => (next) => (action) => {
  if (action.type === BasketActionTypes.ADD_TO_BASKET){
    console.dir(`current product ${action.product.title}`)
    saveState([...store.getState().basket.items, action.product])
  }
  return next(action)
}
const store = createStore(reducers, compose(applyMiddleware(thunk, basketMiddleware, APIMiddleware), DevTools.instrument()))

//store.subscribe(() => {
//  let items = store.getState().basket.items
//
//  if (items.length > 0){
//    saveState(items)
//  }
//});
//
export default store

