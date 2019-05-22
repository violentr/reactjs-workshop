import React, { Fragment, Component } from 'react'
import Catalog from '~/src/components/Catalog.js'
import request from 'superagent'
import {ProductConsumer} from '~/src/context/ProductContext.js'


class ProductsPage extends Component {
  render(){
    return(
      <ProductConsumer>
      {productContext =>
        <Fragment>
          <Catalog products={ productContext.products } />
        </Fragment>
      }
      </ProductConsumer>
    )
  }
}

export default ProductsPage
