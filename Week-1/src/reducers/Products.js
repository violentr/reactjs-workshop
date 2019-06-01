import * as ProductsActionTypes from '~/src/actiontypes/Products.js'

const initialState = {
  isFetching: false,
  error: false,
  products: []
}

const Products = (state=initialState, action) => {
  switch (action.type){
    case ProductsActionTypes.FETCH_PRODUCTS_REQUEST:
      return Object.assign({}, state, {isFetching: true})
    case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
      return Object.assign({}, state, {error: true})
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {entries: action.response})
    default:
      return state
  }
}

export default Products
