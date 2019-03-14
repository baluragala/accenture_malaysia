import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { getProductsAsyncActionCreator } from "./actionCreators/product";
import {
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Text,
  RefreshControl
} from "react-native";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSell = this.handleOnSell.bind(this);
    console.log("List", this.props);
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
    return this.props.products.toJS().map(p => (
      <TouchableOpacity
        key={p.id}
        onPress={() => this.props.navigation.navigate("Detail", { id: p.id })}
      >
        <Item product={p} onSell={this.handleOnSell} />
      </TouchableOpacity>
    ));
  }

  _renderRefreshControl() {
    return (
      <RefreshControl
        onRefresh={() => this.props.dispatch(getProductsAsyncActionCreator())}
        refreshing={this.props.isLoading}
        tintColor={"#00ff80"}
        title={"Refreshing..."}
        titleColor={"#00ff80"}
      />
    );
  }

  render() {
    return (
      <FlatList
        refreshControl={this._renderRefreshControl()}
        data={this.props.products}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ index, item }) => (
          <Item product={item} onSell={this.handleOnSell} />
        )}
        onEndReachedThreshold={0.5}
        onEndReached={() =>
          this.props.dispatch(getProductsAsyncActionCreator())
        }
      />
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state.productState.toJS());
  return {
    products: state.productState.get("products").toJS(),
    isLoading: state.productState.get("isLoading")
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(List);
