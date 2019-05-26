import React from 'react'
import PropTypes from 'prop-types'

const Image = ({title, imageUrl, alt, style}) => {
  return(
    <div>
      <img style={style} src={imageUrl}
        alt={alt ? title : alt}
      />
    </div>
  )
}
Image.propTypes = {
    title: PropTypes.string.isRequired,
    alt: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
  style: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width:  PropTypes.number.isRequired
  }).isRequired
}
export default Image
