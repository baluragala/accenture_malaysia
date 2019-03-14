import React from "react";
import { View, Text } from "react-native";

const Detail = props => (
  <View>
    <Text>Detail for {props.navigation.getParam("id", "N/A")}</Text>
  </View>
);

Detail.navigationOptions = function(propsFromNavigator) {
  return {
    title: `Detail for : ${propsFromNavigator.navigation.getParam("id")}`,
    headerStyle: {
      backgroundColor: "red"
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 24
    }
  };
};
export default Detail;
