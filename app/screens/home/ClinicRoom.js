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

export default class ClinicRoom extends Component {
  static navigationOptions = {
    title: "诊室"
  };

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: "修复科（镶牙）",
          doctorCount: "1位三甲医生",
          intro: "固定义齿、活动义齿、全口义齿、牙齿美容、符着义齿等治疗"
        },
        {
          name: "正畸科（矫正）",
          doctorCount: "3位三甲医生",
          intro: "青少年及成年人牙颌畸形矫正"
        },
        {
          name: "儿童牙病科",
          doctorCount: "1位三甲医生",
          intro: "儿童龋病、前牙外伤等的治疗"
        },
        {
          name: "综合科",
          doctorCount: "1位三甲医生",
          intro: "不需转科，接诊医师根据患者具体病情，一人完成患者所需要的补牙、镶牙、牙美容等全部口腔治疗"
        }
      ])
    };
  }

  _renderSeparator() {
    return <View style={GlobalStyles.separator} />;
  }

  _onRowPress(rowID) {
    console.log(rowID);
    const navigation = this.props.navigation;
    navigation.navigate("DoctorList", {});
  }
  _renderRow(rowData, rowID, sectionID) {
    return (
      <TouchableHighlight
        underlayColor="rgba(255, 255, 255, 0.5)"
        onPress={() => {
          this._onRowPress(rowID);
        }}
      >
        <View style={styles.depList}>
          <View style={{ flex: 5 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 16, color: "#000" }}>
                {rowData.name}
              </Text>
              <Text style={{ fontSize: 12 }}>{rowData.doctorCount}</Text>
            </View>
            <View>
              <Text style={{ marginTop: 15 }}>{rowData.intro}</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              style={{
                height: 16,
                resizeMode: "contain"
              }}
              source={require("../../img/icon_common_rightarrow.png")}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <ScrollView>
          <View style={{ backgroundColor: "#ffffff" }}>
            <View>
              <Image
                style={styles.bannerImg}
                source={require("../../img/pic_home_banner.png")}
              />
            </View>
            <View style={styles.clinicIntro}>
              <Text
                style={{ fontSize: 16, color: "#444444", marginBottom: 17 }}
              >
                艾尔诊所后宰门诊室
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    resizeMode: "contain",
                    marginRight: 8
                  }}
                  source={require("../../img/icon_right_blue.png")}
                />
                <Text
                  style={{ fontSize: 12, color: "#707070", marginRight: 16 }}
                >
                  三甲名医出诊
                </Text>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    resizeMode: "contain",
                    marginRight: 8
                  }}
                  source={require("../../img/icon_right_blue.png")}
                />
                <Text
                  style={{ fontSize: 12, color: "#707070", marginRight: 16 }}
                >
                  无过度医疗
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    width: 18,
                    height: 20,
                    resizeMode: "contain",
                    marginRight: 10
                  }}
                  source={require("../../img/icon_address.png")}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#707070",
                    marginTop: 25,
                    marginBottom: 25
                  }}
                >
                  后宰门130号创之星大厦一单元122（中户）
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    width: 18,
                    height: 20,
                    resizeMode: "contain",
                    marginRight: 10
                  }}
                  source={require("../../img/icon_phone.png")}
                />
                <Text style={{ fontSize: 12, color: "#0000ee" }}>87390008</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              marginTop: 12,
              flexDirection: "row",
              paddingLeft: 15,
              paddingTop: 12,
              paddingBottom: 12,
              alignItems: "center",
              marginBottom: 1
            }}
          >
            <Text>科室</Text>
            <Text style={{ fontSize: 12, color: "#96d4fa" }}>
              （点击科室选择医生进行门诊预约）
            </Text>
          </View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            renderSeparator={this._renderSeparator.bind(this)}
          />
          <View
            style={{
              backgroundColor: "#fff",
              marginTop: 12,
              paddingLeft: 15,
              paddingTop: 12,
              paddingBottom: 12,
              marginBottom: 1
            }}
          >
            <Text style={{ fontSize: 14, color: "#444" }}>诊所介绍</Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              paddingLeft: 15,
              paddingTop: 12,
              paddingBottom: 25
            }}
          >
            <Text style={{ fontSize: 14 }}>
              爱尔诊所是爱尔生活集团旗下，高品质专业口腔诊所。诊所坐诊专家团队均有本地三甲医院主任及副主任医师组成。爱尔诊所可为患者提供线上与线下专业诊疗方案。
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bannerImg: {
    width: Dimensions.get("window").width,
    height: 188,
    resizeMode: "stretch"
  },
  clinicIntro: {
    paddingTop: 22,
    paddingLeft: 15,
    paddingBottom: 17
  },
  depList: {
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingTop: 18,
    paddingBottom: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  }
});
