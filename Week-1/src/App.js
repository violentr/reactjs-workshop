import React, { Fragment } from 'react'
import CartContainer from '~/containers/CartContainer.js'
import Catalog from '~/src/Catalog.js'
import { products } from '~/constants/Products.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const App = () => (
  <Router>
    <Switch>
      <Route path="/about" exact strict render={() => <div> About page</div>} />
      <Route path="/" exact strict render={() => <div> Main page </div>} />
      <Route path="/products" exact strict render={() => <div> Products page</div>} />
      <Route path="/products/:id" exact strict render={() => <div> Product page</div>} />
      <Route path="*" exact strict render={() => <div> Page not found </div>} />
    </Switch>
    <Fragment>
      <CartContainer>
        <Catalog products={ products } />
      </CartContainer>
    </Fragment>
  </Router>
);
export default App;
