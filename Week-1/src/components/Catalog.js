import React, { Fragment, Component } from 'react'
import Product from '~/src/ProductCard/Product.js'
import AddToBasket from '~/src/ProductCard/AddToBasket.js'

import { ProductProvider } from  '~/src/context/ProductContext.js'


const Catalog = (props) => {
  let options = {width: 200, height: 150, alt: ''}
  return (
    <div>
      {
        props.products && props.products.map((product, i) => (
          <Fragment key={i}>
            <Product key={product.id}
              product={product} style={options}
            />
            <AddToBasket key={i} product={product} />
          </Fragment>
        ))
      }
    </div>
  )
}
export default Catalog
