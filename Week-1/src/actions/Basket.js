import * as BasketActionTypes from '~/src/actiontypes/Basket.js'

const addToBasket = (product) => ({
  type: BasketActionTypes.ADD_TO_BASKET,
  product
})

const addToStorage = (storedItems) => ({
  type: BasketActionTypes.LOAD_CART,
  storedItems
})


export const addProductToBasket = (product) => (
  (dispatch) => {
    dispatch(addToBasket(product))
  }
)
export const addProductsToStorage = (products) => (
  (dispatch) => {
    dispatch(addToStorage(products))
  }
)
