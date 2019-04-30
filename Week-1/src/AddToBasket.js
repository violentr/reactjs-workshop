import React, { Component, Fragment } from 'react'
import { BasketConsumer } from '~/context/BasketContext.js'

const AddToBasket = (props) => (
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

export default AddToBasket

