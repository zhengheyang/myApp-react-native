import React, { Component } from "react";
import { StackNavigator, TabBarBottom, TabNavigator } from "react-navigation";
import HomeScreen from "./screens/home/HomeScreenStack";
import MyServiceScreen from "./screens/myService/MyServiceScreenStack";
import UserCenterScreen from "./screens/userCenter/UserCenterScreenStack";
import TabBarIcon from "./components/TabBarIcon";

export default class TabComponent extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    // this.props.navigation;
    console.log("tab-----");
    console.log(this.props.navigation);

    // <HomePage navigation={ this.props.navigation}/>
    return <Tab />;
  }
}

const TabRouteConfigs = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "首页",
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarIcon
          tintColor={tintColor}
          focused={focused}
          normalImage={require("./img/ic_nor_home.png")}
          pressImage={require("./img/ic_press_home.png")}
        />
      )
    }
  },
  MyService: {
    screen: MyServiceScreen,
    navigationOptions: {
      title: "我的服务",
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarIcon
          tintColor={tintColor}
          focused={focused}
          normalImage={require("./img/ic_nor_service.png")}
          pressImage={require("./img/ic_press_service.png")}
        />
      )
    }
  },
  UserCenter: {
    screen: UserCenterScreen,
    navigationOptions: {
      title: "个人中心",
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarIcon
          tintColor={tintColor}
          focused={focused}
          normalImage={require("./img/ic_nor_me.png")}
          pressImage={require("./img/ic_press_me.png")}
        />
      )
    }
  }
};

const TabNavigatorConfigs = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: "bottom",
  animationEnabled: false,
  swipeEnabled: true,
  lazy: true,
  tabBarOptions: {
    style: {
      height: 48,
      backgroundColor: "#f8f8f8"
    },
    activeTintColor: "#09a9ef"
  }
};

const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);
