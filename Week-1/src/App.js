import React, { Fragment } from 'react'
import Layout from '~/src/components/Layout.js'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductContainer from '~/src/containers/ProductContainer.js'

const App = () => (
  <Fragment>
      <Router>
        <ProductContainer>
          <Layout />
        </ProductContainer>
      </Router>
  </Fragment>
)

export default App;
