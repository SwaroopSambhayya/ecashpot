import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View,Text,Image,ImageBackground,
TextInput,ScrollView,Linking,YellowBox,StatusBar,AsyncStorage,AppState } from 'react-native';
import { createStackNavigator } from 'react-navigation';       
import MyProfile from './Screens/MyProfileScreen.js';
import ProD from './pages/ProD.js';
import HomeScreen from './pages/login';
import SignupScreen from './pages/signup';
import Forgotscreen from './pages/forgot';
import MainPage from './pages/main';
import splash from './pages/splash';
import {Root} from 'native-base';
import Intro from './pages/Intro';
import popup from './pages/popup';
import pdetails from './pages/pdetails';
import GroupDetails from './Screens/GroupDetails';
import Groups  from './Screens/Groups';
console.ignoreYellowBox = ['Warning: isMounted(...) is deprecated'];
export default class App extends Component {
  render() {
   
    return (
      <View style={{flex:1}}>
        <StatusBar
    backgroundColor="#4776e6"
    
  />
      <Root>
      <RootStack />
      </Root>
      </View>
    );
  }
}   

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
    Forgot: {
      screen: Forgotscreen,
    },
    Main: {
      screen: MainPage,
    },
    Splashscreen: {
      screen: splash,
    },
    Intro1: {
      screen: Intro
    },
    Myp: {
      screen: pdetails
    },
    GroupDetail: {
      screen: GroupDetails
    },
    Group: {
      screen: Groups
    }
   
},
  {
    initialRouteName: 'Splashscreen',
  }
);
                                
