import React, { Fragment } from 'react'
import Catalog from '~/src/Catalog.js'

import { BasketConsumer } from '~/src/context/BasketContext.js'

const ProductsPage = () => (
    <BasketConsumer >
      {context =>
          <Fragment >
            <Catalog products={ context.products } />
          </Fragment>
      }
    </BasketConsumer>
)

export default ProductsPage
