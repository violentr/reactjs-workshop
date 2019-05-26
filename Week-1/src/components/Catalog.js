import React, { Fragment } from 'react'
import Product from '~/src/components/ProductCard/Product.js'
import AddToBasket from '~/src/components/ProductCard/AddToBasket.js'
import { imageAttributes } from '~/src/shared/helper.js'

const Catalog = ({products}) => {
  return (
    <div>
      {
        products && products.map((product, i) => (
          <Fragment key={i}>
            <Product key={product.id}
              product={product} style={imageAttributes}
            />
            <AddToBasket key={i} product={product} />
          </Fragment>
        ))
      }
    </div>
  )
}
export default Catalog
