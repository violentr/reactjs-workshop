import React, { Fragment } from 'react'
import Product from '~/src/ProductCard/Product.js'
import AddToBasket from '~/src/ProductCard/AddToBasket.js'
import { imageAttributes } from '~/src/shared/helper.js'

const Catalog = (props) => {
  return (
    <div>
      {
        props.products && props.products.map((product, i) => (
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
