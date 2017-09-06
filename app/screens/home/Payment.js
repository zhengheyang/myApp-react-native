import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Button
} from "react-native";

export default class Payment extends Component {
  //调取接口获取诊室名称！

  static navigationOptions = {
    title: "支付",
    tabBarVisible: false
  };

  _onButtonPress() {
    console.log(123123);
  }

  render() {
    return (
      <View style={styles.page}>
        <ScrollView>
          <View style={styles.payStateBox}>
            <View style={styles.payStateItem}>
              <Image
                style={styles.payLogo}
                source={require("../../img/circle.png")}
              />
              <Text style={styles.headerText}>病情描述</Text>
            </View>
            <View style={styles.topBox}>
              <Image
                style={styles.headerLine}
                source={require("../../img/line.png")}
              />
            </View>
            <View style={styles.payStateItem}>
              <Image
                style={styles.payLogo}
                source={require("../../img/right.png")}
              />
              <Text style={styles.headerText}>支付</Text>
            </View>
            <View style={styles.topBox}>
              <Image
                style={styles.headerLine}
                source={require("../../img/line.png")}
              />
            </View>
            <View style={styles.payStateItem}>
              <Image
                style={styles.payLogo}
                source={require("../../img/circle.png")}
              />
              <Text style={styles.headerText}>平台确认</Text>
            </View>
            <View style={styles.topBox}>
              <Image
                style={styles.headerLine}
                source={require("../../img/line.png")}
              />
            </View>
            <View style={styles.payStateItem}>
              <Image
                style={styles.payLogo}
                source={require("../../img/circle.png")}
              />
              <Text style={styles.headerText}>医院就诊</Text>
            </View>
          </View>
          <View>
            <View style={styles.doctorDetails}>
              <Text style={styles.doctorName}>孙医生（工号007）-口腔科加急门诊预约</Text>
              <Text style={styles.red}>0.01元</Text>
            </View>
            <View style={styles.detailsItem}>
              <Text style={styles.detailsText}>预约时间：2016-12-1 08：30：00</Text>
            </View>
            <View style={styles.detailsItem}>
              <Text style={styles.detailsText}>就诊地址：爱尔诊所后宰门诊室 后宰门130号</Text>
            </View>
            <View style={styles.detailsItem}>
              <Text style={styles.detailsText}>病情描述：测试</Text>
            </View>
          </View>
          <View style={styles.payItem}>
            <Text style={styles.payText}>请选择支付方式</Text>
          </View>
          <View style={styles.paymentItem}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../img/weixinzhifu.png")}
            />
            <View style={styles.paymentText}>
              <Text>微信支付</Text>
              <Text>推荐安装威信5.0以上版本用户使用</Text>
            </View>
            <Image
              style={{ width: 18, height: 18 }}
              source={require("../../img/agree.png")}
            />
          </View>
          <View style={styles.paymentItem}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../img/zhifubao.png")}
            />
            <View style={styles.paymentText}>
              <Text>微信支付</Text>
              <Text>推荐安装支付宝2.0以上版本用户使用</Text>
            </View>
            <Image
              style={{ width: 18, height: 18 }}
              source={require("../../img/agree.png")}
            />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity onPress={this._onButtonPress.bind(this)}>
              <View style={{ backgroundColor: "#09a9ef", padding: 15 }}>
                <Text
                  style={{ color: "#fff", fontSize: 16, textAlign: "center" }}
                >
                  确认支付
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  page: {
    backgroundColor: "#fff"
  },
  payStateBox: {
    backgroundColor: "#fff",
    height: 70,
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#dddddd"
  },
  topBox: {
    flex: 1,
    marginRight: 1
  },
  payStateItem: {
    flex: 2,
    paddingTop: 5
  },
  payLogo: {
    alignSelf: "center",
    width: 20,
    height: 20
  },
  headerLine: {
    width: 30,
    alignSelf: "center"
  },
  headerText: {
    marginTop: 7,
    alignSelf: "center"
  },
  doctorDetails: {
    padding: 15,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#dddddd",
    flexDirection: "row"
  },
  doctorName: {
    fontSize: 15,
    color: "#444444",
    fontWeight: "bold",
    marginRight: 10
  },
  red: {
    color: "#ff3b30",
    fontSize: 15
  },
  detailsItem: {
    padding: 13,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#dddddd"
  },
  detailsText: {
    fontSize: 13,
    color: "#818181"
  },
  payItem: {
    paddingLeft: 20,
    paddingTop: 13,
    paddingBottom: 13,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#dddddd"
  },
  payText: {
    fontSize: 17,
    color: "#000",
    fontWeight: "bold"
  },
  paymentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    alignItems: "center"
  },
  paymentText: {
    marginLeft: 22
  },
  footer: {
    paddingTop: 30,
    paddingLeft: 11,
    paddingRight: 11,
    paddingBottom: 50
  }
};
