import React from 'react'
import { productPath } from 'routes/helpers.js'
import ProductPage from 'components/views/Product/index.js'
import {fetchProduct} from 'actions/Product.js'

export default {
  path: productPath(),
  render: ({ match }) => (
    <ProductPage id={match.params.id} />
  ),
  prepareData: (store, query, params) => (
    store.dispatch(fetchProduct(params.id))
  )
}
