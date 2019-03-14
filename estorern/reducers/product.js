import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS } from "../actionTypes/product";
import { fromJS } from "immutable";

const initialState = fromJS({
  products: [],
  isLoading: false,
  page: 1,
  limit: 10
});

function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return state.set("isLoading", true);
    case GET_PRODUCTS_SUCCESS:
      return state
        .set("isLoading", false)
        .set(
          "products",
          fromJS([...state.get("products").toJS(), ...action.products])
        )
        .set("page", state.get("page") + 1);
    default:
      return state;
  }
}

export default productReducer;
