import {createStore, applyMiddleware, compose} from 'redux'
import reducers from 'reducers'
import DevTools from 'containers/DevTools.js'
import {addProductsToStorage} from 'actions/Basket.js'

import APIMiddleware from 'middleware/Api.js'
import BasketMiddleware from 'middleware/basket.js'
import CartMiddleware from 'middleware/cart.js'

const middlewares = [BasketMiddleware, CartMiddleware, APIMiddleware]
const store = createStore(reducers, compose(applyMiddleware(...middlewares), DevTools.instrument()))

//store.subscribe(() => {
//  let items = store.getState().basket.items
//
//  saveState(items)
//});

store.dispatch(addProductsToStorage())

export default store

