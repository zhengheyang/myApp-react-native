import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";

export default class ScrollDate extends Component {
  state = {};
  render() {
    return (
      <View>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          horizontal={true}
          style={[styles.scrollView, styles.horizontalScrollView]}
        >
          <View style={styles.leftTitle}>
            <View style={styles.topLine}>
              <Text>日期</Text>
            </View>
            <View style={styles.midLine}>
              <Text>上午</Text>
            </View>
            <View>
              <Text style={styles.botLine}>下午</Text>
            </View>
          </View>
          <View style={styles.dateBox}>
            <View style={styles.topLine}>
              <Text>日期</Text>
            </View>
            <View style={styles.midLine}>
              <Text>上午</Text>
            </View>
            <View>
              <Text style={styles.botLine}>下午</Text>
            </View>
          </View>
        </ScrollView>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => {
            _scrollView.scrollTo({ x: 0 });
          }}
        >
          <Text>Scroll to start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            _scrollView.scrollToEnd({ animated: true });
          }}
        >
          <Text>Scroll to end</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ffffff",
    height: 300
  },
  horizontalScrollView: {
    height: 115
  },
  leftTitle: {
    width: 37
  },
  topLine: {
    height: 53,
    margin: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd"
  },
  midLine: {
    height: 30,
    margin: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd"
  },
  botLine: {
    height: 30,
    margin: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd"
  },
  dateBox: {
    width: 47
  }
});
