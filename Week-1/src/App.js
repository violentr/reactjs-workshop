import React, { Fragment } from 'react'
import CartContainer from '~/containers/CartContainer.js'
import Catalog from '~/src/Catalog.js'
import { products } from '~/constants/Products.js'

const App = () => (
  <Fragment>
    <CartContainer>
      <Catalog products={ products } />
    </CartContainer>
  </Fragment>
);
export default App;
