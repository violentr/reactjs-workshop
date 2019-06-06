import * as ProductActionTypes from '~/src/actiontypes/Product.js'
import request from 'superagent'
import API_URL from '~/src/constants/Api.js'

const requestProduct = (id) => ({
  type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
  id
})

const receiveProduct = (response) => ({
  type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
  response
})

const errorProduct = () => ({
  type: ProductActionTypes.FETCH_PRODUCT_ERROR,
})

export const fetchProduct = (id) => (
  (dispatch) => {
    dispatch(requestProduct(id))
    request.get(`${API_URL}/${id}`)
      .end((error, response) => {
        error ? dispatch(errorProduct()) : dispatch(receiveProduct(response.body))
      })
  }
)
