import React from "react";
import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";
import Tab from "./app/Tab";

const StackRouteConfigs = {
  Tab: { screen: Tab }
};

const StackNavigatorConfigs = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#fff",
      height: 44
    }
  }
};
const AppStackNavigator = StackNavigator(
  StackRouteConfigs,
  StackNavigatorConfigs
);

AppRegistry.registerComponent("aierLifeRN", () => AppStackNavigator);
