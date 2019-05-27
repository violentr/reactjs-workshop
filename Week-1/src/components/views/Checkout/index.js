import React, { Fragment } from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import { imageAttributes } from '~/src/shared/helper.js'
import { BasketConsumer } from '~/src/context/BasketContext.js'

const listProducts = (context) => {
  let { basket, totalCost} = context
  let products = basket.map((product, i) => (
    <ProductCard key={i} product={product} style={imageAttributes}/>)
  )
  return(
    <Fragment>
      { products.length > 0 && products }
      <p> Total: $ { totalCost(basket) } </p>
    </Fragment>
  )
}
const CheckoutPage = () => (
  <Fragment>
    <BasketConsumer >
      {
        (cartContext) =>{
          return(
          <Fragment>
            <h3> This is Checkout page </h3>
            { listProducts(cartContext) }
          </Fragment>
          )
        }
      }
    </BasketConsumer>
  </Fragment>
)

export default CheckoutPage
