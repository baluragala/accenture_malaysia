import React from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

class Item extends React.Component {
  render() {
    let { title, addintionalInfo, price, rating, id } = this.props.product;
    return (
      <View style={{ height: 175 }}>
        <View style={[styles.container]}>
          <Image
            style={styles.image}
            source={{ uri: "https://dummyimage.com/100X150/000/fff" }}
          />
          <View style={[styles.infoContainer]}>
            <Text style={styles.title}>
              {id}.{title}
            </Text>
            <Text style={styles.addintionalInfo}>{addintionalInfo}</Text>
            <View style={[styles.ratingContainer]}>
              <Text>{rating}</Text>
              <FontAwesome name="star" size={10} color="white" />
            </View>
            <Text style={styles.price}>{price}</Text>
          </View>
          <FontAwesome
            name="heart-o"
            size={32}
            color="green"
            onPress={() => {
              Alert.alert("Favorite", "Would like to set this as favorite", [
                {
                  text: "Ok",
                  onPress: () => {
                    console.log("Ok");
                  }
                },
                {
                  text: "Cancel",
                  onPress: () => {
                    console.log("Cancel");
                  }
                }
              ]);
            }}
          />
        </View>
      </View>
    );
  }
}

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    borderColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  image: {
    width: 100,
    height: 150
  },
  infoContainer: {
    flex: 8,

    marginLeft: 10,
    marginRight: 10,
    padding: 5
  },
  title: {
    fontSize: 16,
    color: "blue",
    fontWeight: "bold"
  },
  ratingContainer: {
    flexDirection: "row",
    color: "white",
    borderWidth: 1,
    borderColor: "black",
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen"
  }
});
