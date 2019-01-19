import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  StatusBar,
  Platform,
  ToolbarAndroid,
  SafeAreaView,
  BackHandler
} from "react-native";
import HeapStack from '../pages/ProD.js';
//library imports 
import { Container, Content, Icon, Header, Body,Root} from 'native-base';
import { DrawerNavigator,createStackNavigator, DrawerItems} from 'react-navigation';
import {RootStack} from '../App.js';

import ProfileScreen from './ProfileScreen.js';
import Profile from './ProD.js';
//custom files 
import pdetails from './pdetails';
import AboutUsScreen from '../Screens/AboutUsScreen.js';
import ActivitiesScreen from '../Screens/ActivitiesScreen';
import GroupsScreen from '../Screens/GroupsScreen';
import HomeScreen from '../Screens/HomeScreen';
import LogoutScreen from '../Screens/LogoutScreen';
import MyAccountScreen from '../Screens/MyAccountScreen';
import MyProfileScreen from '../Screens/MyProfileScreen';
import PlannerScreen from '../Screens/PlannerScreen';
import Imagep from './imagepicker.js';
import ImagePicker from 'react-native-image-crop-picker';



onPick=() =>{
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
  });
  ImagePicker.clean().then(() => {
    console.log('removed all tmp images from tmp directory');
  }).catch(e => {
    Alert.alert(e);
  });
 
 }

export default class MainPage extends Component {
    
  static navigationOptions = {
        
    header:null,
    StatusBarColor:'red'
    }
    componentDidMount() {
      this._navListener = this.props.navigation.addListener('didFocus', () => {
        StatusBar.setBarStyle('light-content');
         StatusBar.setBackgroundColor('#3e72ef');
      });
    }
  
    componentWillUnmount() {
      this._navListener.remove();
    }   
      
  render() {
    return (
      
  <MyApp />     
    );
  }
}
const CustomDrawerContentComponent = (props) => {
  
  return (
    <View style={{flex:1}}> 
    
    <Header style={styles.drawerHeader}>
      <Body>
         <TouchableOpacity onPress={this.onPick} >
        <Image 
          style={styles.drawerImage}
          source={require('../user.png')} />
          <Text style={{fontWeight: 'bold',fontSize: 20,color: 'white'}}>Welcome</Text>
          </TouchableOpacity>
        
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

    
  </View>
  
  );
};

const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  
  Home:  {
    screen: HomeScreen,
    
  },
  Profile: {
    screen: ProfileScreen,
    
  },
  Edit:{
    screen:pdetails
  },
  MyAccount: {
    screen: MyAccountScreen
  },
  Groups: {
    screen: GroupsScreen
  },
  Activities: {
    screen: ActivitiesScreen
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
    drawerToggleRoute: 'DrawerToggle',
    
    
  }

);



const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    
    height: 150,
    backgroundColor: '#091929',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowOpacity: 0.2
  },
  drawerImage: {
    flex:1,
    height: 100,
    width: 130,
    borderRadius: 75,
    
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusBar:{
    backgroundColor:'#4776e6'
  }

})
