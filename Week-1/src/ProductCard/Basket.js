import React from 'react'
import { BasketConsumer } from '~/src/context/BasketContext.js'

const Basket = () => (
  <BasketConsumer>
    { (context) => (
      <button onClick={context.showBasket} disabled={ !context.totalItems() > 0} > Basket { context.totalItems() } </button>
    )}
  </BasketConsumer>
)

export default Basket
