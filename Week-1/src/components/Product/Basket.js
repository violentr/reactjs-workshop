import React from 'react'
import { BasketConsumer } from '~/src/context/BasketContext.js'

const ProductBasket = () => (
  <BasketConsumer>
    { (cartContext) => (
      <button onClick={cartContext.showBasket} disabled={ !cartContext.totalItems() > 0}>
        Basket { cartContext.totalItems() }
      </button>
    )}
  </BasketConsumer>
)

export default ProductBasket
