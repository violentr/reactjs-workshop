import {combineReducers} from 'redux'

import product from 'reducers/Product.js'
import products from 'reducers/Products.js'
import basket from 'reducers/Basket.js'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({products, product, basket, form: formReducer})
