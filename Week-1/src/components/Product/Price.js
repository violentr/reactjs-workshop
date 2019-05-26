import React from 'react'
import PropTypes from 'prop-types'

const ProductPrice = ({price}) => (
  <div> {price} $ </div>
)

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired
}

export default ProductPrice
