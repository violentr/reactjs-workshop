import React from 'react'
import ProductImage from './Image.js'
import ProductTextBox from 'components/Product/Textbox.js'
import ProductPrice from 'components/Product/Price.js'
import PropTypes from 'prop-types'
import {imageAttributes} from 'helpers.js'

const Card = ({product}) => (
  <div>
    <ProductImage
      title={product.title}
      alt={product.alt}
      imageUrl={product.imageUrl}
      style={imageAttributes}
    />
    <ProductTextBox title={product.title} id={product.id} />
    <ProductPrice price={product.price} />
  </div>
)

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    extraImages: PropTypes.array.isRequired
  })
}

export default Card
