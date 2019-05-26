import React from 'react'
import PropTypes from 'prop-types'

const Price = ({price}) => (
  <div> {price} $ </div>
)

Price.propTypes = {
  price: PropTypes.number.isRequired
}

export default Price
