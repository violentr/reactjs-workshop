import * as BasketActionTypes from 'actiontypes/Basket.js'

const addToBasket = (product) => ({
  type: BasketActionTypes.ADD_TO_BASKET,
  product
})

const loadCart = () => ({
  type: BasketActionTypes.LOAD_CART
})

const emptyCart = () => ({
  type: BasketActionTypes.EMPTY_CART
})


export const addProductToBasket = (product) => (
  addToBasket(product)
)
export const addProductsToStorage = () => (
  loadCart()
)
export const emptyBasket = () => (
  emptyCart()
)
