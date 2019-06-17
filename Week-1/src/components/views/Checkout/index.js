import React, {Fragment, Component} from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import {connect} from 'react-redux'
import CheckoutForm from '~/src/components/views/Checkout/Form.js'

class CheckoutPage extends Component {

  constructor(props){
    super(props)
  }

  totalCost(items){
    return items.reduce((total, product) => total + product.price,0)
  }
  handleSubmit(e){
    e.preventDefault()
    if (this.props.form){
      let values = this.props.form
      console.log("event", values)
      alert(JSON.stringify(values))
    }
  }

  render(){
    let {items} = this.props
    let products = items.map((product, i) => (
      <ProductCard key={i} product={product}/>)
    )
    return (
      <Fragment>
        <h3> This is Checkout page </h3>
        {products}
        <p> Total: $ {this.totalCost(items)} </p>
        <CheckoutForm handleSubmit={this.handleSubmit}/>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
console.log("form", state.form)
return  {
  items: state.basket.items,

  }
}
export default connect(mapStateToProps)(CheckoutPage)
