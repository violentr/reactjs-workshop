import * as ProductActionTypes from '~/src/actiontypes/Product.js'

const initialState = {
  isFetching: false,
  error: false,
  product: null
}

const Product = (state=initialState, action) => {
  switch (action.type){
    case ProductActionTypes.FETCH_PRODUCTS_REQUEST:
      return Object.assign({}, state, {isFetching: true})
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return Object.assign({}, state, {error: true})
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {product: action.response})
    default:
      return state
  }
}

export default Product
