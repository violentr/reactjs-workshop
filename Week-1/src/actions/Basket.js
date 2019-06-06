import * as BasketActionTypes from '~/src/actiontypes/Basket.js'

const addToBasket = (product) => ({
  type: BasketActionTypes.ADD_TO_BASKET,
  product
})

export const addProductToBasket = (product) => (
  (dispatch) => {
    dispatch(addToBasket(product))
  }
)
