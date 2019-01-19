import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,BackHandler
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content,Left,Body,Right,Title } from 'native-base';

//custom components imports 
import CustomHeader from './Components/CustomHeader';
import Myaccount from './Myaccount';

class MyAccountScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "My Account",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />,
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./Images/accounting.png')}
        style={styles.icon}
      />
    ),
  })
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
  }
  backAndroid() {
    this.props.navigation.navigate('Home')// Return to previous screen
    return true; // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
  }

  render() {
    return (

      <Container style={styles.container}>
<StatusBar  backgroundColor='transparent'  />
<Header style={{backgroundColor:'#4776e6'}}>
        <Left>
          <Button transparent>
            <Icon name='ios-menu'onPress={() => this.props.navigation.openDrawer()}  />
          </Button>
        </Left>
        <Body>
          <Title>My Account</Title>
        </Body>
       
      </Header>

       <Myaccount />

      </Container>

    )
  }

}

export default MyAccountScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container : {
    backgroundColor:'#091929',
  }
});