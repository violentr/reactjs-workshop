import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { mainPath, aboutPath, productPath, productsPath } from '~/src/routes/helpers.js'
import Product from '~/src/components/views/Product/index.js'
import Main from '~/src/components/views/Main/index.js'
import About from '~/src/components/views/About/index.js'
import Products from '~/src/components/views/Products/index.js'
import NotFound from '~/src/components/views/NotFound/index.js'

const App = () => (
  <Fragment>
    <Router>
      <ul>
        <li>
          <NavLink to={mainPath()}>Home</NavLink>
        </li>
        <li>
          <NavLink to={productsPath()}>Products</NavLink>
        </li>
        <li>
          <NavLink to={aboutPath()}>About</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={ aboutPath() } exact strict component={About} />
        <Route path={ mainPath() }  exact strict component={Main} />
        <Route path={ productsPath() } exact strict component={Products} />
        <Route path={ productPath() } render={ ({ match }) => (
          <Product id={match.params.id} />
        )} />
      <Route path="*" exact strict component={NotFound} />
      </Switch>
    </Router>
  </Fragment>
)

export default App;
