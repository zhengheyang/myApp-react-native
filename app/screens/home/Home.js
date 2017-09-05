import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  ListView,
  TouchableHighlight
} from "react-native";
import GlobalStyles from "../../components/GlobalStyles";

export default class HomePage extends Component {
  static navigationOptions = {
    title: "爱尔生活"
  };

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: "邱洪涛",
          dep: "产科 医师",
          hospital: "西北妇女儿童医院",
          detail: "从事妇产科临床与教学工作25年，擅长处理产程中出现的各种异常情况及疑难问题，娴熟产钳、臀助产、内旋技术等助产技术。"
        },
        {
          name: "王大锤",
          dep: "牙科 医师",
          hospital: "西安市中医医院",
          detail: "从事牙科临床与教学工作25年，擅长处理产程中出现的各种异常情况及疑难问题，娴熟拔牙、种牙等各种技术。"
        }
      ])
    };
  }

  _onColumnPress() {
    const navigation = this.props.navigation;
    navigation.navigate("Clinic", {});
  }

  _onRowPress(rowID) {
    console.log(rowID);
  }

  _renderSeparator() {
    return <View style={GlobalStyles.separator} />;
  }

  _renderRow(rowData, rowID, sectionID) {
    return (
      <TouchableHighlight
        underlayColor="rgba(255, 255, 255, 0.5)"
        onPress={() => {
          this._onRowPress(rowID);
        }}
      >
        <View style={styles.doctorDetail}>
          <View style={styles.doctorImgBox}>
            <Image
              style={styles.doctorImg}
              source={require("../../img/head.jpg")}
            />
          </View>
          <View style={styles.doctorContent}>
            <View
              style={{
                alignItems: "flex-start",
                flexDirection: "row",
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginRight: 25,
                  color: "#444444"
                }}
              >
                {rowData.name}
              </Text>
              <Text style={{ fontSize: 13, color: "#707070" }}>
                {rowData.dep}
              </Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 13, marginBottom: 10, color: "#444444" }}
              >
                {rowData.hospital}
              </Text>
              <Text style={{ fontSize: 12, color: "#707070" }}>
                {rowData.detail}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    console.log("home------");
    console.log(this.props.navigation);
    return (
      <View style={GlobalStyles.container}>
        <ScrollView>
          <View>
            <Image
              style={styles.bannerImg}
              source={require("../../img/pic_home_banner.png")}
            />
          </View>
          <View style={styles.flexbox}>
            <TouchableHighlight
              style={{ width: "50%" }}
              underlayColor="rgba(255, 255, 255, 0.5)"
              onPress={() => {
                this._onColumnPress();
              }}
            >
              <View style={styles.flexboxSection}>
                <View>
                  <Text style={styles.sectionTitle}>复诊</Text>
                  <Text style={styles.sectionContent}>及时复诊预约</Text>
                </View>
                <View>
                  <Image
                    style={styles.iconImg}
                    source={require("../../img/icon_message.png")}
                  />
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ width: "50%" }}
              underlayColor="rgba(255, 255, 255, 0.5)"
              onPress={() => {
                this._onColumnPress();
              }}
            >
              <View style={styles.flexboxSection}>
                <View>
                  <Text style={styles.sectionTitle}>爱尔诊所</Text>
                  <Text style={styles.sectionContent}>名医坐诊</Text>
                </View>
                <View>
                  <Image
                    style={styles.iconImg}
                    source={require("../../img/icon_edit.png")}
                  />
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.flexbox}>
            <TouchableHighlight
              style={{ width: "50%" }}
              underlayColor="rgba(255, 255, 255, 0.5)"
              onPress={() => {
                this._onColumnPress();
              }}
            >
              <View style={styles.flexboxSection}>
                <View>
                  <Text style={styles.sectionTitle}>名医联盟</Text>
                  <Text style={styles.sectionContent}>线上咨询</Text>
                </View>
                <View>
                  <Image
                    style={styles.iconImg}
                    source={require("../../img/icon_mingyilianmeng.png")}
                  />
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ width: "50%" }}
              underlayColor="rgba(255, 255, 255, 0.5)"
              onPress={() => {
                this._onColumnPress();
              }}
            >
              <View style={styles.flexboxSection}>
                <View>
                  <Text style={styles.sectionTitle}>商户联盟</Text>
                  <Text style={styles.sectionContent}>信赖商户</Text>
                </View>
                <View>
                  <Image
                    style={styles.iconImg}
                    source={require("../../img/icon_major.png")}
                  />
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.doctorView}>
            <Text style={styles.doctorTitle}>名医联盟推荐医生</Text>
          </View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            renderSeparator={this._renderSeparator.bind(this)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bannerImg: {
    width: Dimensions.get("window").width,
    height: 160,
    resizeMode: "stretch"
  },
  flexbox: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    backgroundColor: "#f0f0f0"
  },
  flexboxSection: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 70,
    margin: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    paddingRight: 20
  },
  iconImg: {
    width: 38,
    resizeMode: "contain"
  },
  sectionTitle: {
    fontSize: 16,
    color: "#444444",
    fontWeight: "bold",
    marginBottom: 5
  },
  sectionContent: {
    fontSize: 12,
    color: "#888888"
  },
  doctorView: {
    backgroundColor: "#ffffff",
    height: 55,
    paddingLeft: 16,
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 1
  },
  doctorTitle: {
    fontSize: 14,
    color: "#444444"
  },
  doctorDetail: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    height: 144,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10
  },
  doctorImgBox: {
    flex: 1
  },
  doctorImg: {
    width: 90,
    height: 90,
    resizeMode: "contain"
  },
  doctorContent: {
    flex: 3,
    paddingRight: 15,
    paddingLeft: 40
  }
});
