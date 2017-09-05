import React, { Component } from 'react';
import { Image } from 'react-native';

export default class TabBarIcon extends Component {

    render() {
        return (
            <Image source={this.props.focused ? this.props.pressImage : this.props.normalImage}
                style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
            />
        )
    }
}  