import React from "react";

class Item extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log("will render???", this.props.product !== nextProps.product);
  //   return this.props.product !== nextProps.product;
  // };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    let {
      product: { title, stock, price, id },
      onSell
    } = this.props;
    console.log("render", id);
    return (
      <div>
        <h3>
          {title}({stock})
        </h3>
        <p>{price}</p>
        <button onClick={() => onSell(id)}>Sell</button>
      </div>
    );
  }
}

export default Item;
