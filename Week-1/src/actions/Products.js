import * as ProductsActionTypes from 'actiontypes/Products.js'
import {API_CALL} from 'middleware/Api.js'

export const fetchProducts = () => (
  {
    [API_CALL]: {
      endPoint: '/',
      method: "GET",
      query: {},
      types: [
        ProductsActionTypes.FETCH_PRODUCTS_REQUEST,
        ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
        ProductsActionTypes.FETCH_PRODUCTS_FAILURE
      ]
    }
  }
)
