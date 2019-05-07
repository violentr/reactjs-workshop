import React from 'react'
import ProductCard from './ProductCard/Product.js'

const Catalog = (props) => {
  let { products } = props
  let options = { width: 200, height: 150, alt: ''}

  return (
    <div>
      {
       products.map((product) => (
          <ProductCard key={product.id}
            {...product} {...options} {...props}
          />
        ))
      }
    </div>
  )
}
export default Catalog
