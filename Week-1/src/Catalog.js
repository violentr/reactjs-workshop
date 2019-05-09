import React, { Fragment } from 'react'
import Product from '~/src/ProductCard/Product.js'
import Basket from '~/src/ProductCard/Basket.js'

const Catalog = (props) => {
  let { products} = props
  let options = { width: 200, height: 150, alt: ''}

  return (
    <div>
      {
       products.map((product, i) => (
         <Fragment key={ i }>
           <Product key={product.id}
             product={product} style={options}
           />
           <Basket key={ i } product={product} />
         </Fragment>
        ))
      }
    </div>
  )
}
export default Catalog
