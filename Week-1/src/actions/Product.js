import * as ProductsActionTypes from 'actions/actiontypes/Products.js'
import {API_CALL} from 'middleware/Api.js'

export const fetchProduct = (id) => (
  {
    [API_CALL]: {
      endPoint: '/${id}',
      method: "GET",
      query: {},
      types: [
        ProductsActionTypes.FETCH_PRODUCTS_REQUEST,
        ProductsActionTypes.FETCH_PRODUCT_SUCCESS,
        ProductsActionTypes.FETCH_PRODUCT_FAILURE
      ]
    }
  }
)
