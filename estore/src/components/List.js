import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { getProductsAsyncActionCreator } from "../actionCreators/product";
class List extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnSell = this.handleOnSell.bind(this);
  }

  async componentDidMount() {
    try {
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
      .map(
        p =>
          p.stock > 0 && (
            <Item key={p.id} product={p} onSell={this.handleOnSell} />
          )
      );
  }
  render() {
    return (
      <div>
        <h2>Products</h2>
        {this.s.isLoading ? <p>Loading...</p> : this._renderProdcts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productState.get("products"),
    isLoading: state.productState.get("isLoading")
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(List);
