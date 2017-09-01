/**
 * http://www.bigbug.tech
 * Created by 陈冬明 on 20/04/2017.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class HomePage extends React.Component {
    static navigationOptions = {
        title: '这里是主页'
    };

    _onBackButtonClick() {
        const backAction = NavigationActions.back();
        const navigation = this.props.navigation;
        navigation.dispatch(backAction);
    }

    render() {
        console.log(this.props);

        return (
            <View style={styles.page}>
                <Text>Home</Text>
                <Button title="返回" onPress={this._onBackButtonClick.bind(this)}/>
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
    }
});