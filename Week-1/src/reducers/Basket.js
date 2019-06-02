import * as BasketActionTypes from '~/src/actiontypes/Basket.js'

const initialState = {
  items: []
}

const Basket = (state=initialState, action) => {
  switch (action.type){
    case BasketActionTypes.ADD_TO_BASKET:
      return {
        items: [...state.items, action.product]
      }
    default:
      return state
  }
}

export default Basket
