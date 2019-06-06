import React, {Fragment, Component} from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import {connect} from 'react-redux'

class CheckoutPage extends Component {

  constructor(props){
    super(props)
  }

  render(){
    let {items, totalCost} = this.props
    let products = items.map((product, i) => (
      <ProductCard key={i} product={product}/>)
    )
    return (
      <Fragment>
        <h3> This is Checkout page </h3>
        {products}
        <p> Total: $ {totalCost} </p>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => (
  {
    items: state.basket.items,
    totalCost: state.basket.items.reduce((total, product) => total + product.price, 0)
  }
)
export default connect(mapStateToProps)(CheckoutPage)
