import React, { Fragment } from 'react'
import CartContainer from '~/containers/CartContainer.js'
import { products } from '~/constants/Products.js'
import Catalog from '~/src/Catalog.js'

const Products = () => (
  <Fragment>
    <h3> All Products Page </h3>
    <CartContainer>
      <Catalog products={ products } />
    </CartContainer>
  </Fragment>
)

export default Products
