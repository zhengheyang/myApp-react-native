/**
 * http://www.bigbug.tech
 * Created by 陈冬明 on 20/04/2017.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Button
} from 'react-native';
import HomePage from './HomePage';

export default class LoginPage extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    _onLoginButtonClick() {
        const navigation = this.props.navigation;
        navigation.navigate('Home', {
            loginName:'Hello'
        });
    }

    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.label}>请输入用户名</Text>
                <TextInput placeholder="用户名" style={styles.input}/>
                <Text style={styles.label}>请输入密码</Text>
                <TextInput placeholder="密码" style={styles.input}/>
                <Button title="登录" onPress={this._onLoginButtonClick.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 10,
    },
    input: {
        height: 44
    },
    label: {
        color: '#cccccc'
    }
});