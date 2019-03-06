import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import AddProduct from "./components/AddProduct";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Detail from "./components/Detail";
import NoMatch from "./components/NoMatch";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/products" component={List} />
          <Route path="/products/new" component={AddProduct} />
          <Route path="/products/:productId" component={Detail} />
          <Route render={props => <NoMatch {...props} test="1" />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
