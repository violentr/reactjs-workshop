import React from 'react'
import { BasketConsumer } from '~/context/BasketContext.js'

const AddToBasket = () => (
  <BasketConsumer >
    {context => <button onClick={context}> Add To Basket </button>}
  </BasketConsumer>
)

export default AddToBasket

