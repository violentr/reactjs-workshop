import React from 'react'
import Image from './Image.js'
import TextBox from '~/src/ProductCard/Textbox.js'
import Price from '~/src/ProductCard/Price.js'
import Basket from '~/src/ProductCard/Basket.js'

const ProductCard = (props) =>(
  <div>
    <Image {...props} />
    <TextBox {...props}/>
    <Price price={ props.price } />
    <Basket {...props}/>
  </div>
)

export default ProductCard
