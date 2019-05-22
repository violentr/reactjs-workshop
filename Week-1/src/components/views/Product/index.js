import React, { Fragment } from 'react'
import Product from '~/src/ProductCard/Product.js'
import NotFoundPage from '~/src/components/views/NotFound/index.js'
import { ProductConsumer } from '~/src/context/ProductContext.js'
import { image_attributes } from '~/src/shared/helper.js'

const renderProduct = (product) => {
  return product ? <Product product={product} style={image_attributes}/> : <NotFoundPage />
}

const selectProduct = (id) => {
  return (
  <ProductConsumer>
    { (productContext) => {
      let products = productContext.products
      let product = productContext.find_by_id(products, id)
      return(
        <Fragment>
          { renderProduct(product) }
        </Fragment>
      )}
    }
  </ProductConsumer>
 )
}

const ProductPage = ({id}) => (
  <Fragment>
      { selectProduct(id) }
  </Fragment>
)

export default ProductPage
