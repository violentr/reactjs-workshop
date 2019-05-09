import React, { Fragment } from 'react'
import CartContainer from '~/src/containers/CartContainer.js'
import { products } from '~/src/constants/Products.js'
import Catalog from '~/src/Catalog.js'

const ProductsPage = (props) => (
  <Fragment>
    <h3> All Products Page </h3>
    <CartContainer {...props}>
      <Catalog products={ products } {...props}/>
    </CartContainer>
  </Fragment>
)

export default ProductsPage
