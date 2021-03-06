import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base';

class CustomHeader extends Component {
    render() {
        return (
            <Header style={styles.drawerHeader}>
            <Left><Icon name="ios-menu" onPress={() => this.props.navigation.openDrawer()} /></Left>
            <Body>
                <Title>{this.props.title}</Title>
            </Body>
            <Right />
        </Header>
        );
    }
}
export default CustomHeader;
const styles = StyleSheet.create({
    drawerHeader: {
      backgroundColor: 'transparent',
    },
  })