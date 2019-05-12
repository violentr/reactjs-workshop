import React, { Fragment } from 'react'
import { BasketConsumer } from '~/src/context/BasketContext.js'

const addToBasket = ({product}) => (
  <BasketConsumer >
    {cartContext =>
        <Fragment >
          <button onClick={() => cartContext.addProduct(product)}> Add To Basket  </button>
        </Fragment>
    }
  </BasketConsumer>
)
export default addToBasket
