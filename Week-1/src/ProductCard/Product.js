import React from 'react'
import Image from './Image.js'
import TextBox from '~/src/ProductCard/Textbox.js'
import Price from '~/src/ProductCard/Price.js'
import Basket from '~/src/ProductCard/Basket.js'

const ProductCard = (props) =>{
  let { height, width} = props
  return(
    <div>
      <Image
        title={props.title}
        alt={props.alt}
        imageUrl={props.imageUrl}
        style={{ height: height, width: width }}
      />
      <TextBox title={props.title} id={props.id} />
      <Price price={ props.price } />
      <Basket {...props}/>
    </div>
  )
}

export default ProductCard
