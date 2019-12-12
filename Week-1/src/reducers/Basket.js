import * as BasketActionTypes from 'actions/actiontypes/Basket.js'

const initialState = {
  items: []
}

const Basket = (state=initialState, action) => {
  switch (action.type){
    case BasketActionTypes.ADD_TO_BASKET:
      return Object.assign({}, state, {items: [...state.items, action.product]})
    case BasketActionTypes.LOAD_CART:
      return Object.assign({}, state, {items: action.items})
    case BasketActionTypes.EMPTY_CART:
      return Object.assign({}, state, {items: []})
    default:
      return state
  }
}

export default Basket
