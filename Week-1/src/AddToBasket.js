import React from 'react'
import BasketContext from '~/context/BasketContext.js'

const AddToBasket = () => (
  <BasketContext.Consumer >
    {context => <button> Add To Basket { context.counter }</button>}
  </BasketContext.Consumer>
)

export default AddToBasket

