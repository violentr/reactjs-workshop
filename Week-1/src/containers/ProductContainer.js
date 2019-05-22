import React, { Fragment, Component } from 'react'
import Catalog from '~/src/components/Catalog.js'
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
  
  find_by_id(products, id){
    return products.filter((item) => item.id == id )[0]
  }

  render(){
    let options ={
      find_by_id: this.find_by_id,
      products: this.state.products
    }
    return(
      <ProductProvider value={options}>
          {this.props.children}
      </ProductProvider>
    )
  }
}

export default ProductContainer