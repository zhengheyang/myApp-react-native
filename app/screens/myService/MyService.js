import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class MyServicePage extends Component {
  static navigationOptions = {
    title: "我的服务"
  };
  _onButtonPress() {
    const navigation = this.props.navigation;
    navigation.navigate("Test", {});
  }
  render() {
    console.log("service------");
    console.log(this.props.navigation);
    return (
      <View>
        <Text>This is ServicesPage</Text>
        <Button onPress={this._onButtonPress.bind(this)} title="go to test" />
      </View>
    );
  }
}
