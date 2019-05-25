import React, { Fragment } from 'react'
import Product from '~/src/ProductCard/Product.js'
import NotFoundPage from '~/src/components/views/NotFound/index.js'
import { ProductConsumer } from '~/src/context/ProductContext.js'
import { imageAttributes } from '~/src/shared/helper.js'
import  Gallery from '~/src/components/Gallery.js'
import ImagePortal from '~/src/components/ImagePortal.js'

const productImage = document.getElementById('productImage')

const renderProduct = (product) => {
  let item = Object.keys(product).length > 0
  return item ? <Product product={product} style={imageAttributes}/> : <NotFoundPage />
}

const selectProduct = (id) => {
  return (
  <div>
    <ProductConsumer>
      { (productContext) => {
        let products = productContext.products
        let product = productContext.find_by_id(products, id) || {}
        return(
          <Fragment>
            { renderProduct(product) }
            <Gallery images={product && product.extra_images} />
            <ImagePortal style='big-image' url={product.imageUrl} container={productImage} />
          </Fragment>
        )}
      }
    </ProductConsumer>
  </div>
 )
}

const ProductPage = ({id}) => (
  <Fragment>
      { selectProduct(id) }
  </Fragment>
)

export default ProductPage
