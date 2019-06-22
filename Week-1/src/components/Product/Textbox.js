import React from 'react'
import { Link } from 'react-router-dom'
import { productPath } from 'routes/helpers.js'
import PropTypes from 'prop-types'

const ProductTextBox = ({id, title}) =>(
  <Link to={productPath(id)}>
    {title}
  </Link>
)
ProductTextBox.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}
export default ProductTextBox
