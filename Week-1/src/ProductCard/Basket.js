import React, { Fragment } from 'react'
import { BasketConsumer } from '~/src/context/BasketContext.js'

const Basket = ({product}) => (
  <Fragment >
    <BasketConsumer >
      {context =>
          <Fragment >
            <button onClick={() => context.addProduct(product)}> Add To Basket  </button>
          </Fragment>
      }
    </BasketConsumer>
  </Fragment>
)

export default Basket

