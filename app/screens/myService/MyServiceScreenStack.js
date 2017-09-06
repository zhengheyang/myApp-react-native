import React from "react";
import { StackNavigator } from "react-navigation";
import MyService from "./MyService";
import Test from "./Test";

let MyServiceScreen = StackNavigator(
  {
    MyService: { screen: MyService },
    Test: { screen: Test }
  },
  {
    initialRouteName: "MyService",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#fff",
        height: 44,
        elevation: 1
      },
      headerTitleStyle: {
        fontSize: 16,
        color: "#444",
        fontWeight: "normal",
        alignSelf: "center"
      }
    }
  }
);

export default MyServiceScreen;
