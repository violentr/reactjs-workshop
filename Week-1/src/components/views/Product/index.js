import React, { Fragment } from 'react'
import { ProductConsumer } from '~/src/context/ProductContext.js'
import ProductWrapper from '~/src/components/views/Product/Product.js'
import PropTypes from 'prop-types'

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

ProductPage.propTypes = {
  id: PropTypes.string.isRequired
}

export default ProductPage
