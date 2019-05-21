import React, { Fragment, Component } from 'react'
import Catalog from '~/src/components/Catalog.js'
import { products } from '~/src/constants/Products.js'
import request from 'superagent'
const APIURL = "https://my-json-server.typicode.com/violentr/fake_api/products"
import {ProductProvider} from '~/src/context/ProductContext.js'

const fetchData = () => {
  return(
    request.get(APIURL)
      .then(results => results.body)
      .catch(console.error)
  )
}

class ProductsPage extends Component {
  constructor(props){
    super(props)
    this.state = {products: []}
  }

  componentDidMount(){
    fetchData().then(products => {
      this.setState({products: products})
    })
  }

  render(){
    return(
      <Fragment>
        <ProductProvider value={this.state.products} />
        <Catalog products={ products } />
      </Fragment>
    )
  }
}

export default ProductsPage
