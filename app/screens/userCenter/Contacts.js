import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button
}from "react-native";
export default class Contacts extends Component {
    static navigationOptions = {
        // title: "家庭联系人",
        // headerTitleStyle: {
        //     fontSize: 16,
        //     color: "#444",
        //     fontWeight: "normal",
        //     alignSelf: "center"
        // },
        header:{title: "家庭联系人"}
    };

    render() {
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.hearText}>陈东明</Text>
                    <View style={styles.phone}>
                        <Image style={[styles.phoneImg,styles.phoneTxt]} source={require('./../../img/icon_phone.png')}/>
                        <Text style={[styles.phoneText,styles.phoneTxt]}>13856765666</Text>
                    </View>
                    <View style={styles.phone}>
                        <Image style={styles.phoneImg} source={require('./../../img/icon_phone.png')}/>
                        <Text style={styles.phoneText}>13856765666</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#f8f8f8'
    },
    hearText: {
        paddingLeft: 15,
        paddingTop: 23,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#444',
        paddingBottom: 16,
    },
    phone: {
        paddingLeft: 15,
        flexDirection: 'row',
    },
    phoneImg: {
        width: 17,
        height: 17,
        marginTop:11
    },
    phoneText: {
        fontSize: 10,
        paddingTop: 12,
        paddingLeft:5

    },
    phoneTxt:{
        paddingTop:0,
        marginTop:0
    }
})
