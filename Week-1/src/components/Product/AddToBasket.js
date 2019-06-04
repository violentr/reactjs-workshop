import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const ProductAddToBasket =({item, addProduct}) => (
  <Fragment>
    <button onClick={() => addProduct(item)}>
      Add To Basket
    </button>
  </Fragment>
)

ProductAddToBasket.propTypes = {
  item: PropTypes.shape({}),
  addProduct: PropTypes.func.isRequired
}
export default ProductAddToBasket
