import React, {Fragment} from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import PropTypes from 'prop-types'
import ProductAddToBasket from '~/src/components/Product/AddToBasket.js'

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

Catalog.propTypes = {
  products: PropTypes.array
}
export default Catalog
