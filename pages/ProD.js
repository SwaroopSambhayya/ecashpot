import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image,StatusBar,Alert,BackHandler,TouchableOpacity} from "react-native";

import axios from 'axios';

import { Icon, Button, Container, Header, Content,Left,Body,Right,Title,Input,Item,Form,Picker } from 'native-base';
import CardSection from '../copied/CardSection.js';
import Card from '../copied/Card';
import ProfileScreen from '../pages/ProfileScreen.js'
import MyProfile from '../Screens/MyProfileScreen.js';
import {createStackNavigator,NavigationActions} from 'react-navigation'

 
    
export default class Profile extends Component{
 
  static navigationOptions = ({ navigation }) => ({
    header:null,
    title: "Profile",
       
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Profile',
    drawerIcon: () => (
      <Image
        source={require('../Screens/Images/manuser.png')}
        style={styles.icon}
      />
    ),
  })
  
  constructor(props){
    super(props);

    this.state = {
        
        fname:'',
        lname:'',
        pim:'',
        dobi:'',
        g:'',
        ms:'',
        ad:'',
        pa:'',
        occ:'',
        add:'',
        co:'',
        st:'',
        cit:'',
        pc:'',
        inc:'',
        ex:'',

    }
}





componentWillMount(){
    var uri='35.234.150.23:8087/api/userregistrationservice/user/';

          
}

    

/*  state = { profile:[] }
    componentWillMount(){
    axios.get('http://35.234.150.23:8087/api/userregistrationservice/user/',{
    params:{
        id:1
    }
    })

        .then(res => {
            const profile = res.data;
            console.log(res.data);
            this.setState({ profile });
          })
     
    }*/

    
render(){
  const { navigate } = this.props.navigation;
    fetch('http://35.234.150.23:8087/api/userregistrationservice/user/')
    .then(function(response) {
        return response.json();
      })
      .then((responseData)=>{
          this.setState({
              fname:responseData[2].userProfile.firstname,
              lname:responseData[2].userProfile.lastname,
              ad:responseData[2].userProfile.aadhar,
              pa:responseData[2].userProfile.pan,
              dobi:responseData[2].userProfile.dob,
              g:responseData[2].userProfile.gender,
              ms:responseData[2].userProfile.maritalstatus,
              occ:responseData[2].userProfile.occupation,
              add:responseData[2].userProfile.address,
              co:responseData[2].userProfile.country,
              st:responseData[2].userProfile.state,
              cit:responseData[2].userProfile.city,
              pc:responseData[2].userProfile.pincode,
              inc:responseData[2].userProfile.income,
              ex:responseData[2].userProfile.expense
          })
      })
        
    console.log('Email',this.state.details)
    return(
       
        <ScrollView style={{flex:1,backgroundColor:'#091929'}}> 
      
                
    <Header style={{backgroundColor:'#4776e6'}}>
      <Left>
        <Button transparent>
          <Icon name='ios-menu'onPress={() => this.props.navigation.openDrawer()}  />
        </Button>
      </Left>
      <Body>
        <Title>Profile</Title>
      </Body>
      <Right>
        <Button transparent onPress={() =>this.props.navigation.navigate('pd')}   >
          <Icon type='Entypo' name='edit' />
        </Button>
      </Right>
    </Header>

  
        <ProfileScreen/>
        
      
       
       </ScrollView>
    )
  }
}

const styles = {
   containerStyle:{
       backgroundColor:'#091929',
       position:'relative',
       borderWidth: 1,
       borderRadius: 2,
       borderColor: '#ddd',
       borderBottomWidth: 0,
       shadowColor: '#000',
       elevation: 1,
       shadowOpacity: 1,
       shadowRadius: 2,
   },
   icon:{
      width: 24,
    height: 24, 
   },
   

};

  
 