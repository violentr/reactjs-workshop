import React, { Fragment } from 'react'
import ProductCard from '~/src/ProductCard/Product.js'
import { products } from '~/src/constants/Products.js'
import NotFound from '~/src/components/views/NotFound/index.js'

const selectProduct = (id) => {
  let options = { width: 200, height: 150, alt: ''}
  let item = products.filter((item) => item.id == id )[0]

  return item ? <ProductCard product={item} style={options}/> : <NotFound />
}
const Product = ({ id }) => (
  <Fragment>
    { selectProduct(id) }
  </Fragment>
)

export default Product
