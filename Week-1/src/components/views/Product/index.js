import React, {Fragment, Component} from 'react'
import ProductWrapper from '~/src/components/views/Product/Product.js'
import {connect} from 'react-redux'

class ProductPage extends Component {

  constructor(props){
    super(props)
  }

  findByProductId(id){
    let {basketItems, items} = this.props
    let entries = basketItems.length > 0 ? basketItems : items

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
    items: entries,
    basketItems: state.basket.items
  }
}

export default connect(mapStateToProps)(ProductPage)
