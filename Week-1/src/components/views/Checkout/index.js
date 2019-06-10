import React, {Fragment, Component} from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import {connect} from 'react-redux'
import {loadState} from '~/src/shared/cartPersistence.js'

class CheckoutPage extends Component {

  constructor(props){
    super(props)
  }

  totalCost(items){
    return items.reduce((total, product) => total + product.price,0)
  }

  render(){
    let storedItems = loadState()
    let products = storedItems.map((product, i) => (
      <ProductCard key={i} product={product}/>)
    )
    return (
      <Fragment>
        <h3> This is Checkout page </h3>
        {products}
        <p> Total: $ {this.totalCost(storedItems)} </p>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => (
  {
    items: state.basket.items
  }
)
export default connect(mapStateToProps)(CheckoutPage)
