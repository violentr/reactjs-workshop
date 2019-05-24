import React from 'react'
import ReactDOM from 'react-dom'

const ImagePortal =({url, container, style}) => {
  return(
    ReactDOM.createPortal(<img className={style} src={url} />, container)
  )
}
export default ImagePortal
