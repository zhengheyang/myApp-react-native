import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  Button,
  TouchableHighlight,
  Dimensions
} from "react-native";
import Register from "./Register";
import Storage from "./../../components/DeviceStorage";
export default class Login extends React.Component {
  static navigationOptions = {
    // title: 'Welcome',
    header: null,
    tabBarVisible: false
  };

  state = {};

  _loginIn() {
    // let loginData = {
    //     username: this.state.username,
    //     password: this.state.password,
    // };
    let formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);
    console.log(formData);
    let opts = {
      method: "POST",
      headers: {},
      body: formData
    };
    let url =
      "http://www.bigbug.tech:8080/hospital-appointment-api/api/normal_user/authenticate.json?";
    fetch(url, opts)
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response.result);
        Storage.save("TOKEN", response.result.token);
        Storage.save("ID", response.result.id);

        const navigation = this.props.navigation;
        navigation.navigate("Home", {
          TOKEN: response.result.token,
          ID: response.result.id
        });
        // Storage.get("TOKEN").then(tags=> {
        //     console.log(tags)
        // })
      })
      .catch(function(error) {
        console.log(error);
      });
    // console.log(this.state.phone);
  }

  _resetPassword() {
    const navigation = this.props.navigation;
    navigation.navigate("Reset", {});
  }

  _register() {
    const navigation = this.props.navigation;
    navigation.navigate("Register", {});
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.headerImg}>
          <Image
            style={styles.loginImg}
            source={require("./../../img/logo.png")}
          />
        </View>
        <View style={styles.content}>
          <TextInput
            placeholder="请输入手机号"
            placeholderTextColor="#aeaeae"
            underlineColorAndroid="transparent"
            style={styles.message}
            onChangeText={username => this.setState({ username })}
          />
          <TextInput
            placeholder="请输入密码"
            placeholderTextColor="#aeaeae"
            underlineColorAndroid="transparent"
            style={styles.message}
            onChangeText={password => this.setState({ password })}
          />
          <Text onPress={this._loginIn.bind(this)} style={styles.loginBtn}>
            登录
          </Text>
          <View style={styles.ohterBtn}>
            <Text
              onPress={this._resetPassword.bind(this)}
              style={styles.passwordBtn}
            >
              忘记密码
            </Text>
            <Text
              onPress={this._register.bind(this)}
              style={styles.registerBtn}
            >
              注册
            </Text>
          </View>
        </View>
        <View style={styles.footerImg}>
          <Image
            style={styles.bgImg}
            source={require("./../../img/login_bg.png")}
          />
        </View>
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
  content: {
    marginTop: 90,
    marginLeft: 20,
    marginRight: 20
  },
  message: {
    height: 44,
    borderColor: "#dddddd",
    borderWidth: 1,
    marginBottom: 20
  },
  loginBtn: {
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    textAlign: "center"
  },
  btnFont: {
    fontSize: 14,
    color: "#000"
  },
  label: {
    color: "#cccccc"
  },
  headerImg: {
    alignItems: "center",
    paddingTop: 10
  },
  loginImg: {
    width: 64,
    height: 64
  },
  ohterBtn: {
    flexDirection: "row",
    paddingTop: 20,
    paddingLeft: 7,
    paddingRight: 7
  },
  passwordBtn: {
    flex: 1,
    color: "#b2b2b2",
    fontSize: 14
  },
  registerBtn: {
    flex: 1,
    textAlign: "right",
    color: "#b2b2b2",
    fontSize: 14
  },

  footerImg: {
    flex: 1,
    justifyContent: "flex-end"
  },
  bgImg: {
    // width:200,
    width: Dimensions.get("window").width,
    height: 100,
    resizeMode: "stretch"
  }
});
