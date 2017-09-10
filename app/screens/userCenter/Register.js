/**
 * http://www.bigbug.tech
 * Created by 陈冬明 on 20/04/2017.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Login from './Login';
export default class register extends React.Component {
    static navigationOptions = {
        title: '注册'
    };
    _register(){

    }
    _getCode(){
        console.log('111')
    }
    _cancel(){
        const navigation = this.props.navigation;
        navigation.navigate('Login', {

        });
    }
    _checkBox(){
        this.checked = !this.checked;
    }
    render() {
        return (
            <View style={styles.page}>
                <View style={styles.headerImg}>
                    <Image style={styles.loginImg} source={require('./../../img/logo.png')}/>
                </View>
                <View style={styles.content}>
                    <TextInput
                        placeholder="请输入手机号"
                        placeholderTextColor="#aeaeae"
                        underlineColorAndroid="transparent"
                        style={styles.message}/>
                    <View style={styles.code}>
                        <TextInput
                            placeholder="请输入验证码"
                            placeholderTextColor="#aeaeae"
                            underlineColorAndroid="transparent"
                            style={styles.codeInput}>
                        </TextInput>
                        <Text style={styles.codeText} onPress={this._getCode.bind(this)}>获取验证码</Text>
                    </View>
                    <TextInput
                        placeholder="请输入密码"
                        placeholderTextColor="#aeaeae"
                        underlineColorAndroid="transparent"
                        style={styles.message}/>
                    <TextInput
                        placeholder="请输邀请码"
                        placeholderTextColor="#aeaeae"
                        underlineColorAndroid="transparent"
                        style={styles.message}/>

                    <Text onPress={this._register.bind(this)} style={styles.registerBtn}>重置</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    headerImg: {
        alignItems: 'center',
        paddingTop:40
    },
    loginImg: {
        width: 64,
        height: 64,
    },
    content: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20
    },
    message: {
        height: 44,
        borderColor: '#dddddd',
        borderWidth: 1,
        marginBottom: 9,
    },
    code:{
        flexDirection: 'row',
        height: 44,
        borderColor: '#dddddd',
        borderWidth: 1,
        marginBottom: 9,
    },
    codeInput:{
        flex:3
    },
    codeText:{
        flex:1,
        fontSize:12,
        color:'#000',
        lineHeight:30
    },
    registerBtn: {
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        fontSize: 14,
        color: '#000',
        textAlign:'center',
        marginBottom:5
    },

});