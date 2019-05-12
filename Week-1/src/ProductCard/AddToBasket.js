import React, { Fragment } from 'react'
import { BasketConsumer } from '~/src/context/BasketContext.js'

const addToBasket = ({product}) => (
  <BasketConsumer >
    {context =>
        <Fragment >
          <button onClick={() => context.addProduct(product)}> Add To Basket  </button>
        </Fragment>
    }
  </BasketConsumer>
)
export default addToBasket
