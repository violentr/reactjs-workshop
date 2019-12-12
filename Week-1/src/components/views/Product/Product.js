import React, {Fragment} from 'react'
import Gallery from 'components/shared/Gallery.js'
import Portal from 'components/shared/Portal.js'
import ProductCard from 'components/Product/Card.js'
import NotFoundPage from 'components/views/NotFound/index.js'
import PropTypes from 'prop-types'

const productImage = document.getElementById('product-image')

const renderProduct = (product) => {
  let item = Object.keys(product).length > 0
  return item ? <ProductCard product={product}/> : <NotFoundPage />
}

const ProductWrapper = ({product}) => (
  <Fragment>
    {renderProduct(product)}
    <Portal container={productImage}>
      <Gallery images={product && product.extraImages} />
      <img className="big-image" src={product.imageUrl}/>
    </Portal>
  </Fragment>
)

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
