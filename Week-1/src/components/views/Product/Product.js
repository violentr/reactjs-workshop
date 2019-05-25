import React, { Fragment } from 'react'
import Gallery from '~/src/components/Gallery.js'
import ImagePortal from '~/src/components/ImagePortal.js'
import { imageAttributes } from '~/src/shared/helper.js'
import Product from '~/src/ProductCard/Product.js'
import NotFoundPage from '~/src/components/views/NotFound/index.js'

const productImage = document.getElementById('product-image')

const renderProduct = (product) => {
  let item = Object.keys(product).length > 0
  return item ? <Product product={product} style={imageAttributes}/> : <NotFoundPage />
}

const ProductWrapper = ({product}) => {
  return(
    <Fragment>
      { renderProduct(product) }
       <Gallery images={product && product.extra_images} />
       <ImagePortal style="big-image" url={product.imageUrl} container={productImage}/>
    </Fragment>
  )
}

export default ProductWrapper
