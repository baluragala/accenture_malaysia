import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS } from "../actionTypes/product";

export function getProductsActionCreator() {
  return {
    type: GET_PRODUCTS
  };
}

export function getProductsAsyncActionCreator() {
  return async function(dispatch) {
    dispatch(getProductsActionCreator());
    let products = await fetch("http://127.0.0.1:4000/products").then(r =>
      r.json()
    );
    dispatch({ type: GET_PRODUCTS_SUCCESS, products });
  };
}
