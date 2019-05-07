import React, { Fragment } from 'react'
import { BasketConsumer } from '~/src/context/BasketContext.js'

const Basket = (props) => (
  <Fragment >
    <BasketConsumer >
      {context =>
          <Fragment >
            <button onClick={() => context(props)}> Add To Basket  </button>
          </Fragment>
      }
    </BasketConsumer>
  </Fragment>
)

export default Basket

