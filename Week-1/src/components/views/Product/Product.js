import React, { Fragment } from 'react'
import Gallery from '~/src/components/Gallery.js'
import Portal from '~/src/components/Portal.js'
import { imageAttributes } from '~/src/shared/helper.js'
import Product from '~/src/components/ProductCard/Product.js'
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
       <Portal container={productImage}>
         <Gallery images={product && product.extra_images} />
         <img className="big-image" src={product.imageUrl}/>
       </Portal>
    </Fragment>
  )
}

export default ProductWrapper
