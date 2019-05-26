import React from 'react'
import Image from './Image.js'
import TextBox from '~/src/components/ProductCard/Textbox.js'
import Price from '~/src/components/ProductCard/Price.js'
import PropTypes from 'prop-types'

const Product = ({product, style}) =>{
  return(
    <div>
      <Image
        title={product.title}
        alt={product.alt}
        imageUrl={product.imageUrl}
        style={style}
      />
      <TextBox title={product.title} id={product.id} />
      <Price price={product.price} />
    </div>
  )
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    extraImages: PropTypes.array.isRequired
  }),
  style: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width:  PropTypes.number.isRequired
  })
}

export default Product
