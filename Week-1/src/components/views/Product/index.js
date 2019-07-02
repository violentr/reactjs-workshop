import React, {Fragment, Component} from 'react'
import ProductWrapper from 'components/views/Product/Product.js'
import {connect} from 'react-redux'

class ProductPage extends Component {

  render(){
    let product = this.props.product
    return (
      <Fragment>
        <ProductWrapper product={product} />
      </Fragment>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  let {entries} = state.products
  return {
    items: entries,
    basketItems: state.basket.items,
    product: entries && entries.filter((item) => item.id == ownProps.id )[0]
  }
}

export default connect(mapStateToProps)(ProductPage)
