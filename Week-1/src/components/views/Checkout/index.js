import React, { Fragment } from 'react'

import Description from '~/src/ProductCard/Description.js'
const totalCost = (products) =>{
  let total = 0
  products.map((product) => total += product.price)
  return total
}
const Checkout = ({ history, location, match }) => {
  let products = location.state.products
  let options = { width: 150, height: 100, alt: ''}
  console.log("products", products.map(product => product.title))
  return(
  <Fragment>
    <h3> This is Checkout page </h3>
    { products.map((product, i) => (
      <Description key={ i } product={ product } style={ options }/>)
      )
    }
    <p> Total : { totalCost(products) } $</p>
  </Fragment>
  )
}

export default Checkout
