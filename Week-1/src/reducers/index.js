import {combineReducers} from 'redux'

import product from '~/src/reducers/Product.js'
import products from '~/src/reducers/Products.js'
import basket from '~/src/reducers/Basket.js'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({products, product, basket, form: formReducer})
