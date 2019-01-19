import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image,StatusBar,Alert,BackHandler} from "react-native";

import axios from 'axios';
import { Icon, Button, Container, Header, Content,Left,Body,Right,Title } from 'native-base';
import CardSection from '../copied/CardSection.js';
import Card from '../copied/Card';
import PopupDialog from 'react-native-popup-dialog';

import MyProfile from '../Screens/MyProfileScreen.js';
import {createStackNavigator,DrawerActions} from 'react-navigation'
import {id} from './login.js';
 export default class ProfileScreen extends Component{
    static navigationOptions = ({ navigation }) => ({
      header: null,  
      title: "My Profile",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.openDrawer()} />,
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../Pictures/manuser.png')}
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
  
  
  componentWillMount(){
      var uri='35.234.150.23:8087/api/userregistrationservice/user/';
            
  }
  
      
  myfunc(){
    
      return(
        <MyProfile />
      );
    
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
    
      fetch('http://35.234.150.23:8087/api/userregistrationservice/user/'+id+'/userprofile')
      .then(function(response) {
          return response.json();
        })
        .then((responseData)=>{
            this.setState({
                fname:responseData.firstname,
                lname:responseData.lastname,
                ad:responseData.aadhar,
                pa:responseData.pan,
                dobi:responseData.dob,
                g:responseData.gender,
                ms:responseData.maritalstatus,
                occ:responseData.occupation,
                add:responseData.address,
                co:responseData.country,
                st:responseData.state,
                cit:responseData.city,
                pc:responseData.pincode,
                inc:responseData.income,
                ex:responseData.expense
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
      
    </Header>

    
          
             <Content
                    contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                  </Content>
                
          
          
      
          <Card>
          <PopupDialog
    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
  > 
  <View>
      <Text>Hello</Text>
    </View>
  </PopupDialog>
          <CardSection >
          <View style = {{flexDirection: 'row',alignItems:'flex-start',backgroundColor:'#091929'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start', backgroundColor:'#091929'}}>
          {/* <Text>this.state.title</Text>
          <Fetch
      url="'http://35.234.150.23:8082/user/1/userprofile"
      
      onLoad={() => console.log('Started fetching data...')}
      onFetch={({ data }) => this.setState(() => ({ title: data.title }))}
      onError={({ error }) => this.reportError(error)}
      render={this.renderContent}
    /> */}
          
          <Text style ={{fontWeight:'bold', fontSize: 15 , color: 'white'}}> First Name : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start', backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white',borderLeftWidth:2}}>{this.state.fname}</Text>
          </View>
          </View>
          </CardSection>
         
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Last Name : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.lname}</Text>
          </View>
          </View>
          </CardSection>
      
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Date of Birth : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.dobi}</Text>
          </View>
          </View>
          </CardSection>
  
          
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Gender : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.g}</Text>
          </View>
          </View>
          </CardSection>
  
          
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Marital Status : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.ms}</Text>
          </View>
          </View>
          </CardSection>
  
          
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Occupation : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.occ}</Text>
          </View>
          </View>
          </CardSection>
  
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Aadhaar Number : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.ad}</Text>
          </View>
          </View>
          </CardSection>
  
          
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> PAN : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.pa}</Text>
          </View>
          </View>
          </CardSection>
  
  
          
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Address : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.add}</Text>
          </View>
          </View>
          </CardSection>
  
          
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Country : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.co}</Text>
          </View>
          </View>
          </CardSection>
  
          
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> State : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.st}</Text>
          </View>
          </View>
          </CardSection>
  
          
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> City : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.cit}</Text>
          </View>
          </View>
          </CardSection>
  
          
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Pincode : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.pc}</Text>
          </View>
          </View>
          </CardSection>
  
          
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Income : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.inc}</Text>
          </View>
          </View>
          </CardSection>
  
          
          <CardSection>
          <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Expense : </Text>
          </View>
          <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
          <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.ex}</Text>
          </View>
          </View>
          </CardSection>
  
         </Card>
        
         
         </ScrollView>
      )
    }
  }
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    container : {
      backgroundColor:'#091929',
    }
  });