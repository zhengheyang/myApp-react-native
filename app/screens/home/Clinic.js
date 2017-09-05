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

export default class Clinic extends Component {
  static navigationOptions = {
    title: "爱尔诊所"
  };

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: "爱尔诊所后宰门诊室",
          doctorCount: "9位三甲医生",
          dep: "口腔科",
          address: "后宰门130号创之星大厦一单元122"
        },
        {
          name: "爱尔诊所伊顿诊室",
          doctorCount: "4位三甲医生",
          dep: "口腔科",
          address: "白庙村路伊顿公馆西区2号楼504"
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
    navigation.navigate("ClinicRoom", {});
  }
  _renderRow(rowData, rowID, sectionID) {
    return (
      <TouchableHighlight
        underlayColor="rgba(255, 255, 255, 0.5)"
        onPress={() => {
          this._onRowPress(rowID);
        }}
      >
        <View style={styles.clinicDetail}>
          <View style={styles.clinicImgBox}>
            <Image
              style={styles.clinicImg}
              source={require("../../img/adam.jpg")}
            />
          </View>
          <View style={styles.clinicContent}>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  marginRight: 8,
                  color: "#444444"
                }}
              >
                {rowData.name}
              </Text>
              <Text style={{ fontSize: 10, color: "#707070" }}>
                {rowData.doctorCount}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 11,
                  marginBottom: 10,
                  color: "#fff",
                  backgroundColor: "#60bdf8",
                  padding: 8,
                  width: 52,
                  borderRadius: 5
                }}
              >
                {rowData.dep}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ width: 16, height: 20, resizeMode: "contain" }}
                  source={require("../../img/icon_address.png")}
                />
                <Text style={{ fontSize: 12, color: "#707070" }}>
                  {rowData.address}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderSeparator={this._renderSeparator.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  clinicDetail: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 20
  },
  clinicImgBox: {
    flex: 1
  },
  clinicImg: {
    width: 90,
    height: 90,
    resizeMode: "contain"
  },
  clinicContent: {
    flex: 3,
    paddingRight: 15,
    paddingLeft: 40
  }
});
