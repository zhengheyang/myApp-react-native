import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Storage from "./../../components/DeviceStorage";
export default class UserCenterPage extends Component {
  static navigationOptions = {
    headerTitle: "个人中心",
    headerTitleStyle: {
      fontSize: 16,
      color: "#444",
      fontWeight: "normal",
      alignSelf: "center"
    }
  };

  _editMessage() {
    const navigation = this.props.navigation;
    navigation.navigate("EditMessage", {});
  }
  _resetPassword() {
    const navigation = this.props.navigation;
    navigation.navigate("Reset", {});
  }
  _order() {
    const navigation = this.props.navigation;
    navigation.navigate("Order", {});
  }
  _contacts() {
    const navigation = this.props.navigation;
    navigation.navigate("Contacts", {});
  }
  _quit() {
    Storage.delete("TOKEN");
    Storage.delete("ID");
    const navigation = this.props.navigation;
    navigation.navigate("Login", {});
  }

  render() {
    // console.log("user------");
    // console.log(this.props.navigation);

    return (
      <View style={styles.page}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.hearText}>陈东明</Text>
            <View style={styles.phone}>
              <Image
                style={styles.phoneImg}
                source={require("./../../img/icon_phone.png")}
              />
              <Text style={styles.phoneText}>13856765666</Text>
            </View>
          </View>
          <View style={styles.message}>
            <View style={styles.messageBox}>
              <Image
                style={styles.messageImg}
                source={require("./../../img/icon_edit.png")}
              />
              <Text
                onPress={this._editMessage.bind(this)}
                style={styles.messageText}
              >
                编辑个人信息
              </Text>
            </View>
            <View style={styles.messageBox}>
              <Image
                style={styles.messageImg}
                source={require("./../../img/icon_password_red.png")}
              />
              <Text
                onPress={this._resetPassword.bind(this)}
                style={styles.messageText}
              >
                修改密码
              </Text>
            </View>
          </View>
          <View style={styles.message}>
            <View style={styles.messageBox}>
              <Image
                style={styles.messageImg}
                source={require("./../../img/icon_appointment.png")}
              />
              <Text onPress={this._order.bind(this)} style={styles.messageText}>
                我的预约
              </Text>
            </View>
            <View style={styles.messageBox}>
              <Image
                style={styles.messageImg}
                source={require("./../../img/icon_people.png")}
              />
              <Text
                onPress={this._contacts.bind(this)}
                style={styles.messageText}
              >
                家庭联系人
              </Text>
            </View>
          </View>
          <View style={styles.message}>
            <View style={styles.messageBox}>
              <Image
                style={styles.messageImg}
                source={require("./../../img/icon_message.png")}
              />
              <Text style={styles.messageText}>意见反馈</Text>
            </View>
            <View style={styles.messageBox}>
              <Image
                style={styles.messageImg}
                source={require("./../../img/icon_info.png")}
              />
              <Text style={styles.messageText}>关于</Text>
            </View>
          </View>
          <Text onPress={this._quit.bind(this)} style={styles.quitBtn}>
            退出登录
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#fff"
  },
  header: {
    borderBottomWidth: 8,
    borderBottomColor: "#f8f8f8"
  },
  hearText: {
    paddingLeft: 15,
    paddingTop: 23,
    fontSize: 13,
    fontWeight: "bold",
    color: "#444"
  },
  phone: {
    paddingLeft: 15,
    flexDirection: "row"
  },
  phoneImg: {
    width: 17,
    height: 17,
    marginTop: 11
  },
  phoneText: {
    fontSize: 10,
    paddingTop: 12,
    paddingBottom: 16,
    paddingLeft: 5
  },
  message: {
    borderBottomWidth: 8,
    borderBottomColor: "#f8f8f8"
  },
  messageBox: {
    paddingLeft: 15,
    flexDirection: "row",
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f8f8f8"
  },
  messageText: {
    fontSize: 13,
    width: 200,
    color: "#444",
    paddingLeft: 10,
    paddingTop: 19
  },
  messageImg: {
    width: 27,
    height: 27,
    marginTop: 15
  },
  quitBtn: {
    height: 75,
    textAlign: "center",
    lineHeight: 40,
    color: "#09a9ef",
    fontSize: 12,
    borderColor: "#f8f8f8",
    borderBottomWidth: 22,
    borderTopWidth: 10,
    borderLeftWidth: 17,
    borderRightWidth: 17
  }
});
