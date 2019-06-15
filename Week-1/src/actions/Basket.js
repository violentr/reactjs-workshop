import * as BasketActionTypes from '~/src/actiontypes/Basket.js'

const addToBasket = (product) => ({
  type: BasketActionTypes.ADD_TO_BASKET,
  product
})

const loadCart = () => ({
  type: BasketActionTypes.LOAD_CART
})


export const addProductToBasket = (product) => (
  (dispatch) => {
    dispatch(addToBasket(product))
  }
)
export const addProductsToStorage = () => (
  (dispatch) => {
    dispatch(loadCart())
  }
)
