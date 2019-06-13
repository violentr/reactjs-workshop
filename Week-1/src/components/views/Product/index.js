import React, {Fragment, Component} from 'react'
import ProductWrapper from '~/src/components/views/Product/Product.js'
import {connect} from 'react-redux'
import {loadState} from '~/src/shared/cartPersistence.js'

class ProductPage extends Component {

  constructor(props){
    super(props)
  }

  findByProductId(id){
    let entries = loadState().length > 0 ? loadState() : this.props.items
    return entries && entries.filter((item) => item.id == id )[0]
  }

  render(){
    let product = this.findByProductId(this.props.id) || {}
    return (
      <Fragment>
        <ProductWrapper product={product} />
      </Fragment>
    )
  }
}


const mapStateToProps = (state) => {
  let {entries} = state.products
  return {
    items: entries
  }
}

export default connect(mapStateToProps)(ProductPage)
