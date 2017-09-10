import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
}from "react-native";

import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';

export default class Order extends Component {
    static navigationOptions = {
        headerTitle: "我的预约",
        headerTitleStyle: {
            fontSize: 16,
            color: "#444",
            fontWeight: "normal",
            alignSelf: "center"
        }
    };


    render() {
        return (
            <View style={styles.page}>
                <ScrollableTabView
                    style={{marginTop: 10, }}
                    tabBarUnderlineStyle="#09aef"
                    tabBarActiveTextColor="#09a9ef"
                    tabBarInactiveTextColor="#8e8e8e"
                    tabBarTextStyle={{fontSize:12}}
                    initialPage={0}
                    renderTabBar={() => <DefaultTabBar />}
                >
                    <ScrollView tabLabel="未付款" style={styles.tabView}>
                        <View style={styles.container}>
                            <View style={styles.card}>
                                <Text style={styles.message}>2016-07-16 08:00 邓超</Text>
                                <Text style={[styles.message,styles.msg]}>加急预约</Text>
                            </View>
                            <View style={styles.card}>
                                <Text style={styles.message}>口腔科 孙医生（工号007）</Text>
                                <Text style={[styles.message,styles.msg,styles.price]}>￥0.01</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="已付款" style={styles.tabView}>
                        <View style={styles.container}>
                            <View style={styles.card}>
                                <Text style={styles.message}>2016-07-16 08:00 邓超</Text>
                                <Text style={[styles.message,styles.msg]}>加急预约</Text>
                            </View>
                            <View style={styles.card}>
                                <Text style={styles.message}>口腔科 孙医生（工号007）</Text>
                                <Text style={[styles.message,styles.msg,styles.price]}>￥0.01</Text>
                            </View>
                        </View>
                    </ScrollView>

                </ScrollableTabView>
            </View>



        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#fff',
    },
    tabView: {
        flex: 1,
    },
    container:{
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:10,
        paddingRight:10
    },
    card: {
        flex: 1,
        flexDirection: 'row',
    },
    message:{
        flex:1,
        fontSize:12,
        color:'#666'
    },
    msg:{
        textAlign:'right',
        marginTop:10
    },
    price:{
        color:'#ff3b30'
    }


})
