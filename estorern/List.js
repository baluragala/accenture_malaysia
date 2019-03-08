import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { getProductsAsyncActionCreator } from "./actionCreators/product";
import { ActivityIndicator } from "react-native";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSell = this.handleOnSell.bind(this);
  }

  async componentDidMount() {
    try {
      console.log("cdm");
      this.props.dispatch(getProductsAsyncActionCreator());
    } catch (err) {}
  }

  handleOnSell(id) {
    // let products = this.props.products;
    // let index = products.findIndex(p => p.id === id);
    // products[index].stock--;
    // products[index] = { ...products[index] };
  }

  _renderProdcts() {
    return this.props.products
      .toJS()
      .map(p => <Item key={p.id} product={p} onSell={this.handleOnSell} />);
  }
  render() {
    return this.props.isLoading ? (
      <ActivityIndicator size="large" color="green" />
    ) : (
      this._renderProdcts()
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state.productState.toJS());
  return {
    products: state.productState.get("products"),
    isLoading: state.productState.get("isLoading")
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(List);
