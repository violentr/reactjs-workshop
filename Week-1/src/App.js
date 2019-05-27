import React, {Fragment} from 'react'
import Layout from '~/src/components/Layout.js'
import {BrowserRouter as Router} from 'react-router-dom'
import ProductContainer from '~/src/containers/ProductContainer.js'
import {Provider} from 'react-redux'
import store from '~/src/store'

const App = () => (
  <Fragment>
      <Provider store={store}>
        <Router>
          <ProductContainer>
            <Layout />
          </ProductContainer>
        </Router>
      </Provider>
  </Fragment>
)

export default App;
