import React, { Fragment } from 'react'
import Product from '~/src/ProductCard/Product.js'
import NotFoundPage from '~/src/components/views/NotFound/index.js'

import { BasketConsumer } from '~/src/context/BasketContext.js'

const listProducts = (products) => {
  let options = { width: 150, height: 100, alt: ''}
  return products.map((product, i) => (
    <Product key={ i } product={ product } style={ options }/>)
  )

}
const CheckoutPage = () => (
  <Fragment>
    <BasketConsumer >
      {
        (context) =>(
          <Fragment>
            <h3> This is Checkout page </h3>
            { context.basket ? (listProducts(context.basket )) : <NotFoundPage /> }
            <p> Total  {context.totalCost(context.basket)} </p>
          </Fragment>
         )
    }
    </BasketConsumer>
  </Fragment>
)

export default CheckoutPage
