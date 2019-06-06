import * as ProductsActionTypes from '~/src/actiontypes/Products.js'
import request from 'superagent'
import API_URL from '~/src/constants/Api.js'

const requestProducts = () => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS
})

const receiveProducts = (response) => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
  response
})

const errorProducts = () => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
})

export const fetchProducts = () => (
  (dispatch) => {
    dispatch(requestProducts())

    request.get(API_URL)
      .end((error, response) => {
        error ? dispatch(errorProducts()) : dispatch(receiveProducts(response.body))
      })
  }
)
