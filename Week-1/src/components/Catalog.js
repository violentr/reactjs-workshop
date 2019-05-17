import React, { Fragment, Component } from 'react'
import Product from '~/src/ProductCard/Product.js'
import AddToBasket from '~/src/ProductCard/AddToBasket.js'
import request from 'superagent'
const APIURL = "https://my-json-server.typicode.com/violentr/fake_api/products"

const fetchData = () => {
  return(
    request.get(APIURL)
      .then(results => results.body)
      .catch(console.error)
  )
}
class Catalog extends Component {

  constructor(props){
    super(props)
    this.state = {products: []}
  }

  componentDidMount(){
    fetchData().then(products => {
      this.setState({products: products})
    })
  }

  render() {
    let options = { width: 200, height: 150, alt: ''}
    return (
      <div>
        {
          this.state.products && this.state.products.map((product, i) => (
            <Fragment key={ i }>
              <Product key={product.id}
                product={product} style={options}
              />
              <AddToBasket key={ i } product={product} />
            </Fragment>
          ))
        }
      </div>
    )
  }
}
export default Catalog
