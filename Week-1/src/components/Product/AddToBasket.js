import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addProductToBasket} from 'actions/Basket.js'

const ProductAddToBasket = ({product, addProduct}) => (
  <Fragment>
    <button onClick={() => addProduct(product)}>
      Add To Basket
    </button>
  </Fragment>
)

const actionsToProps = (dispatch) => (
  {
    addProduct: (product) => {
      dispatch(addProductToBasket(product))
    }
  }
)

ProductAddToBasket.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    extraImages: PropTypes.array
  }),
}
export default connect(null, actionsToProps)(ProductAddToBasket)
