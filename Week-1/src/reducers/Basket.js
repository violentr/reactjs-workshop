import * as BasketActionTypes from '~/src/actiontypes/Basket.js'

const initialState = {
  items: [],
  storedItems: []
}

const Basket = (state=initialState, action) => {
  switch (action.type){
    case BasketActionTypes.ADD_TO_BASKET:
      return Object.assign({}, state, {items: [...state.items, action.product]})
    case BasketActionTypes.LOAD_CART:
      return Object.assign({}, state, {storedItems: action.storedItems})
    default:
      return state
  }
}

export default Basket
