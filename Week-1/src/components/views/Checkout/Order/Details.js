import React, {Fragment} from 'react'
import ProductCard from 'components/Product/Card.js'
import CheckoutForm from 'components/views/Checkout/Form.js'


const Details = ({items, totalCost, handleSubmit}) => {

  let products = items.map((product, i) => (
    <ProductCard key={i} product={product}/>)
  )
  return (
    <Fragment>
      {products}
      <p> Total: $ {totalCost(items)} </p>
      { items.length > 0 && <CheckoutForm handleSubmit={handleSubmit}/> }
    </Fragment>
  )
}

export default Details
