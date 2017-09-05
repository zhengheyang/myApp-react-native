import React, { Component } from "react";
import { View, Text, Button } from "react-native";

const onButtonPress = () => {
  alert("click");
};

export default class Test extends Component {
  static navigationOptions = {
    title: "test test"
  };
  render() {
    console.log("test------");
    console.log(this.props.navigation);
    return (
      <View>
        <Text>This is test</Text>
        <Button onPress={onButtonPress} title="Press Me" />
      </View>
    );
  }
}
