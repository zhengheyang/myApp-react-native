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
import {NavigationActions} from 'react-navigation';
import Login from './Login';
export default class reset extends React.Component {
    static navigationOptions = {
        title: '重置密码'
    };

    _reset() {

    }

    _getCode() {
        console.log('111')
    }

    _cancel() {
        const navigation = this.props.navigation;
        navigation.navigate('Login', {});
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
                    <Text onPress={this._reset.bind(this)} style={styles.resetBtn}>重置</Text>
                    <Text onPress={this._cancel.bind(this)} style={styles.resetBtn}>取消</Text>
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
        paddingTop: 40
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
        marginBottom: 20,
    },
    code: {
        flexDirection: 'row',
        height: 44,
        borderColor: '#dddddd',
        borderWidth: 1,
        marginBottom: 20,
    },
    codeInput: {
        flex: 3
    },
    codeText: {
        flex: 1,
        fontSize: 12,
        color: '#000',
        lineHeight: 30
    },
    resetBtn: {
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
        marginBottom: 5
    },

});