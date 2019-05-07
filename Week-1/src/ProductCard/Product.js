import React from 'react'
import Image from './Image.js'
import TextBox from '~/src/ProductCard/Textbox.js'
import Price from '~/src/ProductCard/Price.js'
import { default as BasketButton} from '~/src/ProductCard/Basket.js'

const ProductCard = (props) =>(
  <div>
    <Image {...props} />
    <TextBox {...props}/>
    <Price price={ props.price } />
    <BasketButton {...props}/>
  </div>
)

export default ProductCard
