import React, {Fragment, Component} from 'react'
import  {connect} from 'react-redux'
import {addProductToBasket} from '~/src/actions/Basket.js'

class ProductAddToBasket extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let {item, addProduct} = this.props
    return (
      <Fragment>
        <button onClick={() => addProduct(item)}>
          Add To Basket
        </button>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => (
  state
)

const actionToProps = (dispatch) => (
  {
    addProduct: (product) => {
      dispatch(addProductToBasket(product))
    }
  }
)

export default connect(mapStateToProps, actionToProps)(ProductAddToBasket)
