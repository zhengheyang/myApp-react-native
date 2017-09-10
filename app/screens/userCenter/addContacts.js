import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
}from "react-native";
export default class addContacts extends Component {
    static navigationOptions = {
        headerTitle: "添加联系人",
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
                <View style={styles.message}>
                    <Text style={styles.messageName}>姓名</Text>
                    <Text style={styles.messageContent}>陈东明</Text>
                </View>
                <View style={styles.message}>
                    <Text style={styles.messageName}>身份证号</Text>
                    <Text style={styles.messageContent}>陈东明</Text>
                </View>
                <View style={styles.message}>
                    <Text style={styles.messageName}>性别</Text>
                    <Text style={styles.messageContent}>陈东明</Text>
                </View>
                <View style={styles.message}>
                    <Text style={styles.messageName}>地址</Text>
                    <Text style={styles.messageContent}>陈东明</Text>
                </View>
                <View style={styles.prompt}>
                    <Text style={styles.promptText}>温馨提示</Text>
                    <Text style={styles.promptText}>请您正确填写个人信息，以便为您带来更优质的服务</Text>
                </View>
                <Text style={styles.save}>保存</Text>
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
    message:{
        flexDirection: 'row',
        paddingTop:16,
        paddingBottom:16,
        borderBottomColor:'#ddd',
        borderBottomWidth:1
    },
    messageName:{
        flex:1,
        paddingLeft:16,
        fontSize:12,
        color:'#111'
    },
    messageContent:{
        flex:2,
        paddingLeft:16,
        fontSize:12,
        color:'#111'
    },
    prompt:{
        margin:5,
        padding:5,
        paddingBottom:10,
        borderColor:'#ddd',
        borderWidth:1,
    },
    promptText:{
        fontSize:12,
        color:'#7f7f7f',
        paddingTop:6,
    },
    save:{
        margin:8,
        textAlign:'center',
        backgroundColor:'#09a9ef',
        paddingTop:15,
        paddingBottom:15,
        color:'#fff',
        fontSize:14
    }
})