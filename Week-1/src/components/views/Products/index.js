import React, { Fragment, Component } from 'react'
import Catalog from '~/src/components/views/Products/Catalog.js'
import {connect} from 'react-redux'

class ProductsPage extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Fragment>
        <Catalog products={this.props.products} />
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  products: state.products.entries
})

export default connect(mapStateToProps)(ProductsPage)
