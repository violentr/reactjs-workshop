import React, {Fragment, Component} from 'react'
import ProductWrapper from '~/src/components/views/Product/Product.js'
import {connect} from 'react-redux'

class ProductPage extends Component {

  constructor(props){
    super(props)
  }

  render(){
    let product = this.props.productId || {}
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
    productId: entries && entries.filter((item) => item.id == ownProps.id )[0]
  }
}

export default connect(mapStateToProps)(ProductPage)
