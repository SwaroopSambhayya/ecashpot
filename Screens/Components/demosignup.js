import React, { Component } from 'react';
import { Alert,Keyboard, AppRegistry,StyleSheet, View,Text,Image,ImageBackground,TextInput,ScrollView,Linking,YellowBox } from 'react-native';
import{createStackNavigator} from 'react-navigation';    
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import deviceStorage from 'C:/Users/swaroopsambhayya/ecashpo/src/services/deviceStorage.js';   
import {Item,Input,Icon,Button,Toast} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

console.ignoreYellowBox = ['Warning: isMounted(...) is deprecated'];   
export default class SignupScreen extends Component{
  static navigationOptions = {
    title: 'Signup',                                           
    headerStyle: {
      backgroundColor: '#8360c3',
                                                        
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props){
    super(props)   
    this.state={
      userphone:'',                                                  
      pass:'',
      cpass:'',
      mail:''
  }
  }
  validate=async() => {
      const{userphone}=this.state;
      const{pass}=this.state;
      const{cpass}=this.state;
      const {mail}=this.state;
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;  
      alph=/^[a-zA-Z]+$/
      var val=userphone.length;
      var plen=pass.length;
      if(userphone==""){ 
          Keyboard.dismiss();                                  
          Toast.show({
            text: 'Please enter the phone number',
            buttonText: 'Okay',
            buttonTextStyle: { color: "#fff" },
            buttonStyle: { backgroundColor: "#5cb85c" },
            duration:3500
          });    
      }
       
      else if(val!=10 ){
        Toast.show({
          text: 'Phone number must be 10 digits',
          buttonText: 'Okay',
          buttonTextStyle: { color: "#fff" },
          buttonStyle: { backgroundColor: "#5cb85c" },
          duration:3500
        });
      }
      else if(alph.test(userphone)){
        Toast.show({
          text: 'Invalid phone number',
          buttonText: 'Okay',
          buttonTextStyle: { color: "#fff" },
          buttonStyle: { backgroundColor: "#5cb85c" },
          duration:3500
        });
      }
      else if(mail==""){
          Keyboard.dismiss();
          Toast.show({
            text: 'Please enter the mail id',
            buttonText: 'Okay',
            buttonTextStyle: { color: "#fff" },
            buttonStyle: { backgroundColor: "#5cb85c" },
            duration:3500
          });
      }
      else if(reg.test(mail) === false)
      {
        Toast.show({
          text: 'Invalid email id',
          buttonText: 'Okay',
          buttonTextStyle: { color: "#fff" },
          buttonStyle: { backgroundColor: "#5cb85c" },
          duration:3500
        });
      
      return false;
        }
      else if(pass==""){
          Keyboard.dismiss();
          Toast.show({
            text: 'Please enter the password',
            buttonText: 'Okay',
            buttonTextStyle: { color: "#fff" },
            buttonStyle: { backgroundColor: "#5cb85c" },
            duration:3500
          });
      }
      else if(cpass==""){
        Keyboard.dismiss();
        Toast.show({
          text: 'Please confirm the password',
          buttonText: 'Okay',
          buttonTextStyle: { color: "#fff" },
          buttonStyle: { backgroundColor: "#5cb85c" },
          duration:3500
        });
    }
    else if(pass!=cpass){
      Toast.show({
        text: 'Password does not match',
        buttonText: 'Okay',
        buttonTextStyle: { color: "#fff" },
        buttonStyle: { backgroundColor: "#5cb85c" },
        duration:3500
      });
    }
    else if(plen<=5){
      Toast.show({
        text: 'Password is too weak',
        buttonText: 'Okay',
        buttonTextStyle: { color: "#fff" },
        buttonStyle: { backgroundColor: "#5cb85c" },
        duration:3500
      });
    }      
    else{
      fetch('http://35.234.150.23:8087/api/userregistrationservice/user/', {
        method: 'POST',
        headers: { 
                 'Accept': 'application/json',
                 'Content-Type': 'application/json' 
                 },
        body: JSON.stringify({id:30,"cellnumber":userphone,"email":mail,"password":pass,userProfile:null})
      })
      .then((response) =>  { 
        JSON.stringify(response.json());
        })
       
       .then((responseData) => { console.log("response: " + responseData); })
      .catch((err) => { console.log(err); Alert.alert('Make sure you have a internet connection'); });
      Toast.show({
        text: 'Signup successfull',
        buttonText: 'Okay',
        buttonTextStyle: { color: "#fff" },
        buttonStyle: { backgroundColor: "#5cb85c" },
        duration:3500,
        position:'top'
      });
      this.props.navigation.navigate('Main');
    }
    }
                             
  render(){
    const { navigate } = this.props.navigation; 
      return(
        <LinearGradient colors={['#8360c3','#2ebf91']} style={{flex:1,justifyContent:'space-around'}}> 
        <ScrollView  >  
          
             <Text>{'\n'}</Text>
             <Item rounded>
          <Input placeholder='Phone'  placeholderTextColor='white' onChangeText={userphone=>this.setState({userphone})} style={{color:'white',backgroundColor:'transparent',fontWeight:'bold'}} selectionColor={'white'} keyboardType='phone-pad'/>
          <Icon type="Ionicons" name="md-phone-portrait" style={{color:'#fff'}}/>
          </Item>
        <Text>{'\n'}</Text>
        <Item rounded>
          <Input placeholder='Email'  placeholderTextColor='white' onChangeText={mail=> this.setState({mail})}  style={{color:'white',backgroundColor:'transparent',fontWeight:'bold'}} selectionColor={'white'} keyboardType='email-address'/>
          <Icon type="Entypo" name="email" style={{color:'#fff'}}/>
          </Item>
        
         
        <Text>{'\n'}</Text>
        <Item rounded>
          <Input placeholder='Password' placeholderTextColor='white'secureTextEntry={true} onChangeText={pass=>this.setState({pass})} style={{color:'white', fontWeight:'bold'}} selectionColor={'white'} />
         <Icon type="FontAwesome" name="lock" style={{color:'#fff'}}/>
          </Item>
        <Text>{'\n'}</Text>
        <Item rounded>
          <Input placeholder=' Confirm password' placeholderTextColor='white'secureTextEntry={true} onChangeText={cpass=>this.setState({cpass})} style={{color:'white',fontWeight:'bold'}} selectionColor={'white'} />
         <Icon type="FontAwesome" name="lock" style={{color:'#fff'}}/>
          </Item> 
           <Text>{'\n'}</Text>
          <View >
          <Button block style={{backgroundColor:'#9b08cc',borderRadius:30,elevation:2,flex:1}} onPress={this.validate}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Signup</Text>
          </Button>
              </View>                
                                                         
          </ScrollView>                                     
          </LinearGradient>
      );
  }

}
