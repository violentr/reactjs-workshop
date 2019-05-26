import React  from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { mainPath, aboutPath, productsPath } from '~/src/routes/helpers.js'
import CartContainer from '~/src/containers/CartContainer.js'
import Basket from '~/src/components/ProductCard/Basket.js'

// Views
import routes from '~/src/routes/index.js'

const routeWithSubroutes = (route, key) =>(
  <Route {...route} key={key}/>
)
const Layout = () =>(
  <CartContainer >
    <Basket />
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
  </CartContainer>
)

export default Layout
