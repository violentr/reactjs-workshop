import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { mainPath, aboutPath, productsPath } from '~/src/routes/helpers.js'

// Views
import routes from '~/src/routes/index.js'

const routeWithSubroutes = (route, key) =>(
  <Route {...route} key={key}/>
)
const App = () => (
  <Fragment>
    <Router>
      <ul>
        <li>
          <NavLink to={ mainPath() }>Home</NavLink>
        </li>
        <li>
          <NavLink to={ productsPath() }>Products</NavLink>
        </li>
        <li>
          <NavLink to={ aboutPath() }>About</NavLink>
        </li>
      </ul>
      <Switch>
        { routes.map((route, key) => routeWithSubroutes(route, key))}
      </Switch>
    </Router>
  </Fragment>
)

export default App;
