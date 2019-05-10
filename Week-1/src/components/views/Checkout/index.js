import React, { Fragment } from 'react'
import Product from '~/src/ProductCard/Product.js'
import NotFoundPage from '~/src/components/views/NotFound/index.js'

import { BasketConsumer } from '~/src/context/BasketContext.js'

const totalCost = (products) =>{
  let total = 0
  products.map((product) => total += product.price)
  return total
}
const listProducts = (products) => {
  let options = { width: 150, height: 100, alt: ''}
  return products.map((product, i) => (
    <Product key={ i } product={ product } style={ options }/>)
  )

}
const CheckoutPage = ({ history, location, match }) => {
  let products = location.state ? location.state.basket : <NotFoundPage />

  return(
  <Fragment>
    <BasketConsumer >
      {context =>(
          <Fragment>
            <h3> This is Checkout page </h3>
            {context.basket? listProducts(context.basket) : <NotFoundPage />}
            {context.basket ? (<p> Total $ {totalCost(context.basket)} </p>) : '' }
          </Fragment>
            )
      }
    </BasketConsumer>
  </Fragment>
  )
}

export default CheckoutPage
