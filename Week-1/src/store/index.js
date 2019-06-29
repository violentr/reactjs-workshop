import {createStore, applyMiddleware, compose} from 'redux'
import reducers from 'reducers'
import {addProductsToStorage} from 'actions/Basket.js'

import APIMiddleware from 'middleware/Api.js'
import BasketMiddleware from 'middleware/basket.js'
import CartMiddleware from 'middleware/cart.js'

const middlewares = [BasketMiddleware, CartMiddleware, APIMiddleware]
const store = createStore(reducers, compose(applyMiddleware(...middlewares)))

//store.subscribe(() => {
//  let items = store.getState().basket.items
//
//  saveState(items)
//});

store.dispatch(addProductsToStorage())

export default store

