import React, {Fragment} from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import ProductAddToBasket from '~/src/components/Product/AddToBasket.js'
import PropTypes from 'prop-types'

const Catalog = ({products, addProduct}) => (
  <div>
    {
      products && products.map((product, i) => (
        <Fragment key={i}>
          <ProductCard key={product.id}
            product={product}
          />
          <ProductAddToBasket key={i} item={product} addProduct={addProduct} />
        </Fragment>
      ))
    }
  </div>
)

Catalog.propTypes = {
  products: PropTypes.array
}
export default Catalog
