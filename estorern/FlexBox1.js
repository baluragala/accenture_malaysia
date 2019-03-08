import React from "react";
import { View, StyleSheet } from "react-native";

class FlexBox1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.item, styles.item1]} />
        <View style={[styles.item, styles.item2]} />
        <View style={[styles.item, styles.item3]} />
      </View>
    );
  }
}

export default FlexBox1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "yellow",
    alignItems: "flex-end"
  },
  item: {
    width: 50,
    height: 50
  },
  item1: {
    backgroundColor: "red"
  },
  item2: {
    backgroundColor: "green"
  },
  item3: {
    backgroundColor: "blue"
  }
});
