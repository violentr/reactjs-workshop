import React, { Fragment } from 'react'
import CartContainer from '~/containers/CartContainer.js'
import Catalog from '~/src/Catalog.js'
import { products } from '~/constants/Products.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { mainPath, aboutPath, productPath, productsPath } from '~/src/routes/helpers.js'
import Product from '~/src/components/views/Product/index.js'
import Main from '~/src/components/views/Main/index.js'

const App = () => (
  <Router>
    <Switch>
      <Route path={ aboutPath() } exact strict render={() => <div> About page</div>} />
      <Route path={ mainPath() }  exact strict component={Main} />
      <Route path={ productsPath() } exact strict render={() => <div> All Products page</div>} />
      <Route path={ productPath() } render={ ({ match }) => (
        <Product id={match.params.id} />
      )} />
      <Route path="*" exact strict render={() => <div> Page not found </div>} />
    </Switch>
    <Fragment>
      <CartContainer>
        <Catalog products={ products } />
      </CartContainer>
    </Fragment>
  </Router>
)

export default App;
