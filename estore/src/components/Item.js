import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
    console.log("componentDidUpdate test");
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
          <Link to={`/products/${id}`}>
            {title.toUpperCase()}({stock})
          </Link>
        </h3>
        <p>{price}</p>
        <button onClick={() => onSell(id)}>Sell</button>
      </div>
    );
  }
}

Item.defaultProps = {
  product: { id: 0, title: "N/A", price: -1, stock: -1 },
  onSell: () => {}
};

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }),
  onSell: PropTypes.func.isRequired
};

export default Item;
