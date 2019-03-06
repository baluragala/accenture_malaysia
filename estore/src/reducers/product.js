import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS } from "../actionTypes/product";

function productReducer(state = { products: [], isLoading: false }, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, isLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.products, isLoading: false };
    default:
      return state;
  }
}

export default productReducer;
