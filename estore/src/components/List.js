import React from "react";
import Item from "./Item";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, title: "Iphone", price: 1700, stock: 10 },
        { id: 2, title: "S10", price: 1500, stock: 0 },
        { id: 3, title: "Pixel", price: 1200, stock: 20 },
        { id: 4, title: "Note", price: 1000, stock: 30 }
      ]
    };

    this.handleOnSell = this.handleOnSell.bind(this);

    // setTimeout(() => {
    //   let products = [...this.state.products];
    //   products.push({ id: 5, title: "NEW Note", price: 1000, stock: 30 });
    //   this.setState({ products });
    // }, 5000);
  }

  handleOnSell(id) {
    let products = this.state.products;
    let index = products.findIndex(p => p.id === id);
    products[index].stock--;
    products[index] = { ...products[index] };
    this.setState({ products });
  }

  _renderProdcts() {
    return this.state.products.map(
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
        {this._renderProdcts()}
      </div>
    );
  }
}
export default List;
