import React, { Component } from 'react'
import request from 'superagent'
const APIURL = 'https://my-json-server.typicode.com/violentr/fake_api/products'
import {ProductProvider} from '~/src/context/ProductContext.js'
import PropTypes from 'prop-types'

const fetchData = () => {
  return(
    request.get(APIURL)
      .then(results => results.body)
      .catch(console.error)
  )
}

class ProductContainer extends Component {
  constructor(props){
    super(props)
    this.state = {products: []}
  }

  componentDidMount(){
    fetchData().then(products => {
      this.setState({products: products})
    })
  }

  findById(products, id){
    return products.filter((item) => item.id == id )[0]
  }

  render(){
    let options ={
      findById: this.findById,
      products: this.state.products
    }
    return(
      <ProductProvider value={options}>
          {this.props.children}
      </ProductProvider>
    )
  }
}

ProductContainer.propTypes = {
  children: PropTypes.element.isRequired
}
export default ProductContainer
