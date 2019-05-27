import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Portal =(props) => {
  let {children, container} = props
  return(
    ReactDOM.createPortal(children, container)
  )
}

Portal.propTypes = {
  children: PropTypes.array.isRequired,
  container: PropTypes.instanceOf(Node).isRequired
}

export default Portal

