import React from 'react'

const Image = ( {title, imageUrl, alt, style }) => {
  let {height, width} = style

  return(
    <div>
      <img style={{ width, height}} src={ imageUrl }
        alt={alt ? title : alt }
      />
    </div>
  )
}
export default Image
