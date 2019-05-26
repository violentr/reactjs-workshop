import React, { Fragment } from 'react'
import { BasketConsumer } from '~/src/context/BasketContext.js'
import PropTypes from 'prop-types'
const addToBasket = ({product}) => (
  <BasketConsumer >
    {cartContext =>
        <Fragment >
          <button onClick={() => cartContext.addProduct(product)}> Add To Basket  </button>
        </Fragment>
    }
  </BasketConsumer>
)
addToBasket.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    extraImages: PropTypes.array.isRequired
  })
}
export default addToBasket
