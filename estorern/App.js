import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import FlexBox1 from "./FlexBox1";
import Item from "./Item";
import { Provider } from "react-redux";
import store from "./store";
import List from "./List";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollView>
          <List />
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "red"
  }
});
