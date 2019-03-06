import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS } from "../actionTypes/product";
import { fromJS } from "immutable";

const initialState = fromJS({ products: [], isLoading: false });
function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return state.set("isLoading", true);
    case GET_PRODUCTS_SUCCESS:
      return state
        .set("isLoading", false)
        .set("products", fromJS(action.products));
    default:
      return state;
  }
}

export default productReducer;
