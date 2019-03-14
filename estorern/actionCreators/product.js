import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS } from "../actionTypes/product";

export function getProductsActionCreator() {
  return {
    type: GET_PRODUCTS
  };
}

export function getProductsAsyncActionCreator() {
  return async function(dispatch, getState) {
    const state = getState();
    const page = state.productState.get("page");
    const limit = state.productState.get("limit");
    const isLoading = state.productState.get("isLoading");

    dispatch(getProductsActionCreator());
    if (!isLoading && state.productState.get("products").size != 40) {
      let products = await fetch(
        `http://127.0.0.1:4000/products?_page=${page}&_limit=${limit}`
      ).then(r => r.json());

      dispatch({ type: GET_PRODUCTS_SUCCESS, products });
    }
  };
}
