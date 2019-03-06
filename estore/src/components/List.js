import React from "react";
import Item from "./Item";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: false
    };

    this.handleOnSell = this.handleOnSell.bind(this);

    // setTimeout(() => {
    //   let products = [...this.state.products];
    //   products.push({ id: 5, title: "NEW Note", price: 1000, stock: 30 });
    //   this.setState({ products });
    // }, 5000);
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      let products = await fetch("http://localhost:4000/products").then(r =>
        r.json()
      );
      this.setState({ products, isLoading: false });
    } catch (err) {}
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
        {this.state.isLoading ? <p>Loading...</p> : this._renderProdcts()}
      </div>
    );
  }
}
export default List;
