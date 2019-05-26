import React, { Fragment } from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import ProductAddToBasket from '~/src/components/Product/AddToBasket.js'
import { imageAttributes } from '~/src/shared/helper.js'
import PropTypes from 'prop-types'
const Catalog = ({products}) => {
  return (
    <div>
      {
        products && products.map((product, i) => (
          <Fragment key={i}>
            <ProductCard key={product.id}
              product={product} style={imageAttributes}
            />
            <ProductAddToBasket key={i} product={product} />
          </Fragment>
        ))
      }
    </div>
  )
}

Catalog.propTypes = {
  products: PropTypes.array
}
export default Catalog