import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  AsyncStorage
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content,Left,Body,Right,Title,Toast,Root } from 'native-base'
import HomeScreen from '../pages/login.js';
import RootStack from '../App.js';
//custom components imports 
import CustomHeader from './Components/CustomHeader';
import Dialog from "react-native-dialog";
import DialogBox from 'react-native-dialogbox';


class LogoutScreen extends Component {


  static navigationOptions = ({ navigation }) => ({
    title: "Logout",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />,
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./Images/logout.png')}
        style={styles.icon}
      />
    ),
  })
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: true
    }; 
  }
  
  
componentWillMount(){
  Alert.alert(
    'Logout',
    'Are you sure?',
    [
      {text: 'Yes', onPress: () => this.userLogout() },
      {text: 'No', onPress: () => this.props.navigation.navigate('Home'), style: 'cancel'},
    
    ],
    { cancelable: false }
  );
}
componentWillUnMount(){
  this.RootStack.removeItem;
}
async userLogout() {
  try {
    await AsyncStorage.removeItem('id_token');
    Alert.alert('Logout Success!');
    
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
  }
}
home=()=>{
  this.props.navigation.navigate('Home')
}
  render() {
    
    return (
      <RootStack>
      <View> 
             
     
<Header style={styles.drawerHeader}>

            <Left><Icon name="ios-menu" onPress={() => this.props.navigation.openDrawer()} /></Left>
            <Body>
                <Title>Logout</Title>
            </Body>
            <Right />
        </Header>

        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
       
       
        </Content>

        
        </View>
        </RootStack>
    );
  }

}

export default LogoutScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container : {
    backgroundColor:'#6791bc',
  }
});