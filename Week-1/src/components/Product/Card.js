import React from 'react'
import ProductImage from './Image.js'
import ProductTextBox from '~/src/components/Product/Textbox.js'
import ProductPrice from '~/src/components/Product/Price.js'
import PropTypes from 'prop-types'

const Card = ({product, style}) =>{
  return(
    <div>
      <ProductImage
        title={product.title}
        alt={product.alt}
        imageUrl={product.imageUrl}
        style={style}
      />
      <ProductTextBox title={product.title} id={product.id} />
      <ProductPrice price={product.price} />
    </div>
  )
}
Card.propTypes = {
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

export default Card
