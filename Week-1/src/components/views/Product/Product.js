import React, { Fragment } from 'react'
import Gallery from '~/src/components/Gallery.js'
import Portal from '~/src/shared/components/Portal.js'
import { imageAttributes } from '~/src/shared/helper.js'
import ProductCard from '~/src/components/Product/Card.js'
import NotFoundPage from '~/src/components/views/NotFound/index.js'
import PropTypes from 'prop-types'

const productImage = document.getElementById('product-image')

const renderProduct = (product) => {
  let item = Object.keys(product).length > 0
  return item ? <ProductCard product={product} style={imageAttributes}/> : <NotFoundPage />
}

const ProductWrapper = ({product}) => {
  return(
    <Fragment>
      { renderProduct(product) }
       <Portal container={productImage}>
         <Gallery images={product && product.extraImages} />
         <img className="big-image" src={product.imageUrl}/>
       </Portal>
    </Fragment>
  )
}

ProductWrapper.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    extraImages: PropTypes.array
  })
 }
export default ProductWrapper
