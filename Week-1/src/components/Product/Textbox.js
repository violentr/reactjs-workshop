import React from 'react'
import { Link } from 'react-router-dom'
import { productPath } from '~/src/routes/helpers.js'
import PropTypes from 'prop-types'

const TextBox = ({id, title}) =>(
  <Link to={productPath(id)}>
    {title}
  </Link>
)
TextBox.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}
export default TextBox
