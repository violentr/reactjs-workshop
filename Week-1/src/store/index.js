import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '~/src/reducers'
import DevTools from '~/src/containers/DevTools.js'
import {loadState} from '~/src/shared/cartPersistence.js'
import APIMiddleware from '~/src/middleware/Api.js'
import BasketMiddleware from '~/src/middleware/basket.js'
import {addProductsToStorage} from '~/src/actions/Basket.js'

const middlewares = [thunk, BasketMiddleware, APIMiddleware]
const store = createStore(reducers, compose(applyMiddleware(...middlewares), DevTools.instrument()))

const persistedState = loadState()

//store.subscribe(() => {
//  let items = store.getState().basket.items
//
//  saveState(items)
//});

store.dispatch(addProductsToStorage(persistedState))

export default store

