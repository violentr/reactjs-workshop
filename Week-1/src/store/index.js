import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '~/src/reducers'
import DevTools from '~/src/containers/DevTools.js'
import {saveState} from '~/src/shared/cartPersistence.js'

const store = createStore(reducers, compose(applyMiddleware(thunk), DevTools.instrument()))

store.subscribe(() => {
  let items = store.getState().basket.items

  if (items.length > 0){
    saveState(items)
  }
});

export default store

