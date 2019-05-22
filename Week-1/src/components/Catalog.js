import React, { Fragment, Component } from 'react'
import Product from '~/src/ProductCard/Product.js'
import AddToBasket from '~/src/ProductCard/AddToBasket.js'
import { image_attributes } from '~/src/shared/helper.js'

const Catalog = (props) => {
  return (
    <div>
      {
        props.products && props.products.map((product, i) => (
          <Fragment key={i}>
            <Product key={product.id}
              product={product} style={image_attributes}
            />
            <AddToBasket key={i} product={product} />
          </Fragment>
        ))
      }
    </div>
  )
}
export default Catalog
