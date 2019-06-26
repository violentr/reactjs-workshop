import React, {Fragment}  from 'react'
import {connect} from 'react-redux'
import {Link}  from 'react-router-dom'
import {checkoutPath} from 'routes/helpers.js'

const ProductBasket = ({items, children}) => (
  <Fragment>
    <Link to={checkoutPath()}>
      <button disabled={ items.length == 0}>
        Basket {items.length}
      </button>
    </Link>
    { children }
  </Fragment>
)

const mapStateToProps = (state) => ({
  items: state.basket.items
})

export default connect(mapStateToProps)(ProductBasket)
