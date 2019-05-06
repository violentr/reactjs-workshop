import React from 'react'
import Image from './Image.js'
import TextBox from './Textbox.js'
import Price from './Price.js'
import { default as BasketButton} from './AddToBasket.js'

const ProductCard = (props) =>(
  <div>
    <Image {...props} />
    <TextBox {...props}/>
    <Price price={ props.price } />
    <BasketButton {...props}/>
  </div>
)

export default ProductCard
