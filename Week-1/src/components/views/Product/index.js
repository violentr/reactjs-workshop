import React, { Fragment } from 'react'
import Product from '~/src/ProductCard/Product.js'
import NotFoundPage from '~/src/components/views/NotFound/index.js'
import {ProductConsumer} from '~/src/context/ProductContext.js'

const renderProduct = (product) => {
  let options = { width: 200, height: 150, alt: ''}
  return product ? <Product product={product} style={options}/> : <NotFoundPage /> 
}

const selectProduct = (id) => {  
  return (
  <ProductConsumer>
    {(productContext) =>
      <Fragment>
        { renderProduct(productContext.find_by_id(productContext.products, id)) }
      </Fragment>
    }
  </ProductConsumer>
 )
}

const ProductPage = ({ id }) => (
  <Fragment>
      { selectProduct(id) }
  </Fragment>
)

export default ProductPage
