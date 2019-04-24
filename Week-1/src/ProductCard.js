import React from 'react'
import Image from './Image.js'
import TextBox from './Textbox.js'
import Price from './Price.js'

const ProductCard = (props) =>(
  <div>
    <Image {...props} />
    <TextBox title={ props.title }/>
    <Price price={ props.price } />
  </div>
);

export default ProductCard;
