import React, { Fragment, Component } from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import { imageAttributes } from '~/src/shared/helper.js'
import {connect} from 'react-redux'

const listProducts = (props) => {
  let { items, totalCost} = props
  let products = items.map((product, i) => (
    <ProductCard key={i} product={product} style={imageAttributes}/>)
  )
  return(
    <Fragment>
      { products.length > 0 && products }
      <p> Total: $ { totalCost()} </p>
    </Fragment>
  )
}

class CheckoutPage extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Fragment>
        <Fragment>
          <h3> This is Checkout page </h3>
          { listProducts(this.props) }
        </Fragment>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => (
  { items: state.basket.items,
    totalCost: () => {
      let total = 0
      state.basket.items.map((product) => total += product.price)
      return total
    }
  }
)
export default connect(mapStateToProps)(CheckoutPage)
