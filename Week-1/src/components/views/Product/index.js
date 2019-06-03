import React, {Fragment, Component} from 'react'
import ProductWrapper from '~/src/components/views/Product/Product.js'
import {connect} from 'react-redux'

class ProductPage extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let {items, id, findById} = this.props
    let product = findById(items, id) || {}
    return (
      <Fragment>
        <ProductWrapper product={product} />
      </Fragment>
    )
  }
}


const mapStateToProps = (state) => (
  {
    items: state.products.entries,
    findById: (products, id) => (
      products && products.filter((item) => item.id == id )[0]
    )
  }
)

export default connect(mapStateToProps)(ProductPage)
