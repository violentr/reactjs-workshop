import React from 'react'
import { Link } from 'react-router-dom'
import { productPath } from '~/src/routes/helpers.js'

const TextBox = ({ id, title}) =>(
  <Link to={productPath(id)}>
    {title}
  </Link>
)

export default TextBox
