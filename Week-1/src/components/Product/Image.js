import React from 'react'
import PropTypes from 'prop-types'

const ProductImage = ({title, imageUrl, alt, style}) => {
  return(
    <div>
      <img style={style} src={imageUrl}
        alt={alt ? title : alt}
      />
    </div>
  )
}
ProductImage.propTypes = {
    title: PropTypes.string.isRequired,
    alt: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
  style: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width:  PropTypes.number.isRequired
  }).isRequired
}
export default ProductImage
