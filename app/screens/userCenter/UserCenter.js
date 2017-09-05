import React, { Component } from "react";
import { View, Text } from "react-native";

export default class UserCenterPage extends Component {
  static navigationOptions = {
    title: "个人中心"
  };
  render() {
    console.log("user------");
    console.log(this.props.navigation);
    return (
      <View>
        <Text>This is MinePage</Text>
      </View>
    );
  }
}
