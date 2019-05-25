import React, { Fragment } from 'react'
import { ProductConsumer } from '~/src/context/ProductContext.js'
import ProductWrapper from '~/src/components/views/Product/Product.js'


const ProductPage = ({id}) => (
  <Fragment>
    <ProductConsumer>
      { (productContext) => {
        let products = productContext.products
        let product = productContext.findById(products, id) || {}
        return(
          <Fragment>
            <ProductWrapper product={product} />
          </Fragment>
        )}
      }
    </ProductConsumer>
  </Fragment>
)

export default ProductPage
