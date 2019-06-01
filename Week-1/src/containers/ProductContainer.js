import React, {Component} from 'react'
import {ProductProvider} from '~/src/context/ProductContext.js'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchProducts} from '~/src/actions/Products.js'

class ProductContainer extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchProducts()
  }

  findById(products, id){
    return products.filter((item) => item.id == id )[0]
  }

  render(){
    let options = {
      findById: this.findById,
      products: this.props.products
    }
    return (
      <ProductProvider value={options}>
        {this.props.children}
      </ProductProvider>
    )
  }
}

ProductContainer.propTypes = {
  children: PropTypes.element.isRequired
}

const mapStateToProps = (state) => ({
  products: state.products.entries
})

const actionsToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts)
})

export default connect(mapStateToProps, actionsToProps)(ProductContainer)
