import React, { Fragment, Component } from 'react'
import Catalog from '~/src/components/views/Products/Catalog.js'
import {connect} from 'react-redux'
import {addProductToBasket} from '~/src/actions/Basket.js'

class ProductsPage extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Fragment>
        <Catalog products={this.props.products} addProduct={this.props.addProduct}/>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  products: state.products.entries
})

const actionToProps = (dispatch) => (
  {
    addProduct: (product) => {
      dispatch(addProductToBasket(product))
    }
  }
)
export default connect(mapStateToProps, actionToProps)(ProductsPage)
