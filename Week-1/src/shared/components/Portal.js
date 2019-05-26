import React from 'react'
import ReactDOM from 'react-dom'

const Portal =(props) => {
  let {container, children} = props
  return(
    ReactDOM.createPortal(children, container)
  )
}

export default Portal

