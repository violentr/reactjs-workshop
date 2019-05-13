import React from 'react'
import Image from './Image.js'
import TextBox from '~/src/ProductCard/Textbox.js'
import Price from '~/src/ProductCard/Price.js'

const Product = ({ product, history, style }) =>{
  let { height, width} = style
  return(
    <div>
      <Image
        title={ product.title }
        alt={ product.alt }
        imageUrl={ product.imageUrl }
        style={ style }
      />
      <TextBox title={product.title} id={product.id} />
      <Price price={ product.price } />
    </div>
  )
}

export default Product
