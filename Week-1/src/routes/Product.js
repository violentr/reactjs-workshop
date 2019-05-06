import React from 'react'
import { productPath } from '~/src/routes/helpers.js'
import Product from '~/src/components/views/Product/index.js'

export default {
  path: productPath(),
  render: ({ match }) => (
    <Product id={match.params.id} />
  )
}
