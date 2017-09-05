import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ListView,
  TouchableHighlight
} from "react-native";
import GlobalStyles from "../../components/GlobalStyles";

export default class DoctorList extends Component {
  static navigationOptions = {
    title: "爱尔诊所后宰门诊室"
  };

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: "靳医生（工号005）",
          hospital: "艾尔诊所后宰门诊室",
          intro:
            "口腔修复专长，擅长（贴面、全瓷冠桥、牙齿美白等）前牙美容修复及微创修复，致力于研究各种牙列缺损和牙列缺失的修复以及咬合重建修复。"
        },
        {
          name: "靳医生（工号005）",
          hospital: "艾尔诊所后宰门诊室",
          intro:
            "口腔修复专长，擅长（贴面、全瓷冠桥、牙齿美白等）前牙美容修复及微创修复，致力于研究各种牙列缺损和牙列缺失的修复以及咬合重建修复。"
        },
        {
          name: "靳医生（工号005）",
          hospital: "艾尔诊所后宰门诊室",
          intro:
            "口腔修复专长，擅长（贴面、全瓷冠桥、牙齿美白等）前牙美容修复及微创修复，致力于研究各种牙列缺损和牙列缺失的修复以及咬合重建修复。"
        }
      ])
    };
  }

  _renderSeparator() {
    return <View style={GlobalStyles.separator} />;
  }

  _onRowPress(rowID) {
    console.log(rowID);
  }
  _renderRow(rowData, rowID, sectionID) {
    return (
      <TouchableHighlight
        underlayColor="rgba(255, 255, 255, 0.5)"
        onPress={() => {
          this._onRowPress(rowID);
        }}
      >
        <View style={styles.docList}>
          <View style={styles.imgBox}>
            <Image
              style={styles.doctorImg}
              source={require("../../img/head.jpg")}
            />
          </View>
          <View style={styles.doctorContent}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 10,
                color: "#444444"
              }}
            >
              {rowData.name}
            </Text>
            <Text style={{ fontSize: 13, marginBottom: 10, color: "#444444" }}>
              {rowData.hospital}
            </Text>
            <Text style={{ fontSize: 12, color: "#707070" }}>
              {rowData.intro}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <ScrollView>
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
  docList: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingTop: 18,
    paddingBottom: 20
  },
  imgBox: {
    flex: 1
  },
  doctorImg: {
    width: 65,
    height: 65,
    resizeMode: "contain"
  },
  doctorContent: {
    flex: 3,
    paddingRight: 15,
    paddingLeft: 20
  }
});
