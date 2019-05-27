import {combineReducers} from 'redux'

import product from '~/src/reducers/Product.js'
import products from '~/src/reducers/Products.js'

export default combineReducers({products, product})
