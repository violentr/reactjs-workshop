import React, {Fragment, Component} from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import {imageAttributes} from '~/src/shared/helper.js'
import {connect} from 'react-redux'

class CheckoutPage extends Component {

  constructor(props){
    super(props)
  }

  totalCost(items){
    let total = 0
    items.map((product) => total += product.price)
    return total
  }

  render(){
    let {items} = this.props
    let products = items.map((product, i) => (
      <ProductCard key={i} product={product} style={imageAttributes}/>)
    )
    return (
      <Fragment>
        <h3> This is Checkout page </h3>
        {products}
        <p> Total: $ {this.totalCost(items)} </p>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => (
  {items: state.basket.items}
)
export default connect(mapStateToProps)(CheckoutPage)
