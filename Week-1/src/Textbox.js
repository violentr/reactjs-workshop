import React from 'react'
import { Link } from 'react-router-dom'
import { productPath } from '~/src/routes/helpers.js'

const TextBox = (props) =>(
  <Link to={productPath(props.id)}>
    {props.title}
  </Link>
)

export default TextBox
