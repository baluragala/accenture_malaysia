import productReducer from "./product";
import { fromJS } from "immutable";
import { GET_PRODUCTS } from "../actionTypes/product";

describe("Product Reducer", function() {
  it("should return initial state", function() {
    const initialState = fromJS({ products: [], isLoading: false });
    const action = { type: "@@INIT" };
    const state = productReducer(undefined, action);
    expect(initialState.toJS()).toMatchObject(state.toJS());
  });

  it("should return state with isLoading set to true", function() {
    const prevState = fromJS({ products: [], isLoading: false });
    const action = { type: GET_PRODUCTS };
    const nextState = productReducer(prevState, action);
    expect(nextState.get("isLoading")).toBeTruthy();
  });
});
