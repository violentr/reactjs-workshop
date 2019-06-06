import React  from 'react'
import { mainPath, aboutPath, productsPath } from '~/src/routes/helpers.js'
import {NavLink} from 'react-router-dom'
import ProductBasket from '~/src/components/Product/Basket.js'
import PropTypes from 'prop-types'

const Layout = (props) => (
  <ProductBasket>
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
    { props.children }
  </ProductBasket>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
