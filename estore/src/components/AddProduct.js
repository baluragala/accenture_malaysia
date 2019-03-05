import React from "react";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      stock: 1
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.priceEleRef = React.createRef();
  }

  handleTitleChange(e) {
    console.log(e.target.value);
    this.setState({ title: e.target.value });
  }

  handleStockChange(e) {
    console.log(e.target.value);
    this.setState({ stock: e.target.value });
  }

  getValue = () => {
    alert(this.priceEleRef.current.value);
  };

  setValue = () => {
    this.priceEleRef.current.value = Math.random();
    this.priceEleRef.current.style.backgroundColor = "red";
    this.priceEleRef.current.focus();
  };

  componentDidMount() {
    console.dir(this.priceEleRef);
    this.priceEleRef.current.value = Math.random();
  }

  async handleSubmit(e) {
    e.preventDefault();
    let data = { ...this.state };
    data.price = this.priceEleRef.current.value;
    let product = await fetch("http://localhost:4000/products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(r => r.json());
    alert(`Product Save. New id : ${product.id}`);
  }

  render() {
    console.dir("render", this.priceEleRef);
    return (
      <div>
        <button onClick={this.getValue}>Get</button>
        <button onClick={this.setValue}>Set</button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <input type="text" ref={this.priceEleRef} />
          <input
            type="number"
            value={this.state.stock}
            onChange={this.handleStockChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
