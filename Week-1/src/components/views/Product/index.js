import React, { Fragment } from 'react'
import Product from '~/src/ProductCard/Product.js'
import { products } from '~/src/constants/Products.js'
import NotFoundPage from '~/src/components/views/NotFound/index.js'

const selectProduct = (id) => {
  let options = { width: 200, height: 150, alt: ''}
  let item = products.filter((item) => item.id == id )[0]

  return item ? <Product product={item} style={options}/> : <NotFoundPage />
}
const ProductPage = ({ id }) => (
  <Fragment>
    { selectProduct(id) }
  </Fragment>
)

export default ProductPage
