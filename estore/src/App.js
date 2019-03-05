import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import AddProduct from "./components/AddProduct";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddProduct />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
