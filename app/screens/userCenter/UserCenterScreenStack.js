import React from "react";
import { StackNavigator } from "react-navigation";
import UserCenter from "./UserCenter";

let UserCenterScreen = StackNavigator(
  {
    UserCenter: { screen: UserCenter }
  },
  {
    initialRouteName: "UserCenter",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#fff",
        height: 44
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

export default UserCenterScreen;
