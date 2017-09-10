import React from "react";
import { StackNavigator } from "react-navigation";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import addContacts from "./addContacts";
import Contacts from "./Contacts";
import EditMessage from "./EditMessage";
import Order from "./Order";
import UserCenter from "./UserCenter";

let UserCenterScreen = StackNavigator(
  {
    UserCenter: { screen: UserCenter },
    Login: { screen: Login },
    Register: { screen: Register },
    Reset: { screen: Reset },
    addContacts: { screen: addContacts },
    Contacts: { screen: Contacts },
    EditMessage: { screen: EditMessage },
    Order: { screen: Order }
  },
  {
    initialRouteName: "UserCenter",
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

export default UserCenterScreen;
