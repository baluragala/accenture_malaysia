import React, { Component } from "react";
import { View, TextInput, Text, Picker, Button } from "react-native";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Type here to translate!"
            onChangeText={text => this.setState({ text })}
            keyboardType="number-pad"
            multiline={true}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.state.text
              .split(" ")
              .map(word => word)
              .join(" ")}
          </Text>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <Button
            onPress={() => {}}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

export default AddProduct;
