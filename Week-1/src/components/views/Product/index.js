import React, { Fragment } from 'react'
import ProductCard from '~/src/ProductCard.js'
import { products } from '~/constants/Products.js'
const selectProduct = (id) => {
  let options = { width: 200, height: 150, alt: ''}
  let item = products.filter((item) => item.id == id )[0]
  return <ProductCard {...item} {...options}/>
}
const Product = ({ id }) => (
  <Fragment>
    { selectProduct(id) }
  </Fragment>
)

export default Product
