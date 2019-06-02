import {combineReducers} from 'redux'

import product from '~/src/reducers/Product.js'
import products from '~/src/reducers/Products.js'
import basket from '~/src/reducers/Basket.js'

export default combineReducers({products, product, basket})
