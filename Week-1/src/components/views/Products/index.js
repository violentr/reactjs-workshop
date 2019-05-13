import React, { Fragment } from 'react'
import Catalog from '~/src/Catalog.js'
import { products } from '~/src/constants/Products.js'

const ProductsPage = () => (
  <Fragment>
    <Catalog products={ products } />
  </Fragment>
)

export default ProductsPage
