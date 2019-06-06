import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '~/src/reducers'
import DevTools from '~/src/containers/DevTools.js'
const store = createStore(reducers, compose(applyMiddleware(thunk), DevTools.instrument()))

export default store

