import React, {Fragment, Component} from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import {connect} from 'react-redux'

class CheckoutPage extends Component {

  constructor(props){
    super(props)
  }

  totalCost(items){
    return items.reduce((total, product) => total + product.price,0)
  }

  render(){
    let basketItems= this.props.items.length > 0 ? this.props.items : this.props.storedItems
    let products = basketItems.map((product, i) => (
      <ProductCard key={i} product={product}/>)
    )
    return (
      <Fragment>
        <h3> This is Checkout page </h3>
        {products}
        <p> Total: $ {this.totalCost(basketItems)} </p>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => (
  {
    items: state.basket.items,
    storedItems: state.basket.storedItems,
  }
)
export default connect(mapStateToProps)(CheckoutPage)
