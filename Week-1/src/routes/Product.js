import React from 'react'
import { productPath } from '~/src/routes/helpers.js'
import ProductPage from '~/src/components/views/Product/index.js'

export default {
  path: productPath(),
  render: ({ match }) => (
    <ProductPage id={match.params.id} />
  )
}
