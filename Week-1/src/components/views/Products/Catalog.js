import React, {Fragment} from 'react'
import ProductCard from 'components/Product/Card.js'
import ProductAddToBasket from 'components/Product/AddToBasket.js'
import {connect} from 'react-redux'

const Catalog = ({products}) => (
  <div>
    {
      products && products.map((product, i) => (
        <Fragment key={i}>
          <ProductCard key={product.id}
            product={product}
          />
          <ProductAddToBasket key={i} product={product} />
        </Fragment>
      ))
    }
  </div>
)

const mapStateToProps = (state) => ({
  products: state.products.entries
})

export default connect(mapStateToProps)(Catalog)
