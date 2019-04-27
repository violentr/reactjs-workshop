import React from 'react'
import { BasketConsumer } from '~/context/BasketContext.js'

const AddToBasket = () => (
  <BasketConsumer >
    {context => <button> Add To Basket { context.counter }</button>}
  </BasketConsumer>
)

export default AddToBasket

