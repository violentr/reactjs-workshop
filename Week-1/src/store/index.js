import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '~/src/reducers'
import DevTools from '~/src/containers/DevTools.js'
import {addProductsToStorage} from '~/src/actions/Basket.js'

import APIMiddleware from '~/src/middleware/Api.js'
import BasketMiddleware from '~/src/middleware/basket.js'
import CartMiddleware from '~/src/middleware/cart.js'

const middlewares = [thunk, BasketMiddleware, CartMiddleware, APIMiddleware]
const store = createStore(reducers, compose(applyMiddleware(...middlewares), DevTools.instrument()))

//store.subscribe(() => {
//  let items = store.getState().basket.items
//
//  saveState(items)
//});

store.dispatch(addProductsToStorage())

export default store

