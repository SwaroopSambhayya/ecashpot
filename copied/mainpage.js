import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

//custom files 
import AboutUsScreen from 'C:/GS/Screens/AboutUsScreen.js';
import ActivitiesScreen from 'C:/GS/Screens/ActivitiesScreen.js';
import GroupsScreen from 'C:/GS/Screens/GroupsScreen.js';
import HomeScreen from 'C:/GS/Screens/HomeScreen.js';
import LogoutScreen from 'C:/GS/Screens/LogoutScreen.js';
import MyAccountScreen from 'C:/GS/Screens/MyAccountScreen.js';
import MyProfileScreen from 'C:/GS/Screens/MyProfileScreen.js';
import PlannerScreen from 'C:/GS/Screens/PlannerScreen.js';
import ProD from 'C:/GS/pages/ProD.js';
import Intro from 'C:/GS/pages/Intro.js';


export default class MainPage extends Component {
    static navigationOptions = {
        
        header:null,   
      };
  render() {
    return (
      <MyApp />
    );
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('C:/GS/Pictures/manuser.png')} />
        <Text style={{fontWeight: 'bold',fontSize: 20,color: 'white'}}>Welcome</Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: HomeScreen
  },
  MyProfile: {
    screen: ProD
  },
  MyAccount: {
    screen: MyAccountScreen
  },
  Groups: {
    screen:GroupsScreen
  },
  Activities: {
    screen:ActivitiesScreen
  },
  Planner: {
    screen: PlannerScreen
      },
  AboutUs: {
    screen: AboutUsScreen
  },
  Logout: {
    screen: LogoutScreen
  },
  
},
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 150,
    backgroundColor: '#07498c',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowOpacity: 0.2
  },
  drawerImage: {
    height: 100,
    width: 130,
    borderRadius: 75,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})
