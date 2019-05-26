import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Portal =(props, {container}) => {
  return(
    ReactDOM.createPortal(props.children, container)
  )
}

Portal.propTypes = {
  container: PropTypes.instanceOf(Node).isRequired
}

export default Portal

