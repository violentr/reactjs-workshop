import {createStore, applyMiddleware} from 'redux'
import reducers from 'reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import {addProductsToStorage} from 'actions/Basket.js'

import APIMiddleware from 'middleware/Api.js'
import BasketMiddleware from 'middleware/basket.js'
import CartMiddleware from 'middleware/cart.js'

const middlewares = [BasketMiddleware, CartMiddleware, APIMiddleware]
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))

//store.subscribe(() => {
//  let items = store.getState().basket.items
//
//  saveState(items)
//});

store.dispatch(addProductsToStorage())

export default store

