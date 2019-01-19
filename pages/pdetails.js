import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image,StatusBar,Alert,BackHandler,TouchableOpacity,Keyboard} from "react-native";

import axios from 'axios';

import { Icon, Button, Container, Header, Content,Left,Body,Right,Title,Input,Item,Form,Picker } from 'native-base';
import CardSection from '../copied/CardSection.js';
import Card from '../copied/Card';
import ProfileScreen from './ProfileScreen.js'
import MyProfile from '../Screens/MyProfileScreen.js';
import {createStackNavigator,NavigationActions} from 'react-navigation'
import ImagePicker from 'react-native-image-crop-picker';
 

export default class pdetails extends Component{
    
    static navigationOptions = {
      title: 'Edit',                                           
      headerStyle: {
        backgroundColor: '#4776e6',
                                                          
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../edit.png')}
          style={styles.icon}
        />
      ),
    };
     constructor(props){
           
               super(props);
   
               this.state = {
           
                 DateText: '',
                 DateHolder: null,
                 first:'',
                 last:'',
                 DOB:'',
                 Aadhaar:'',
                 PAN:'',
                 Gender: undefined,
                 Occupation:undefined,
                 Country:'',
                 State:'',
                 City:'',
                 Pincode:'',
                 Married:undefined,
                 Income:'',
                 Expense:'',

                        
   
   
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
              
       validate=()=>{
         const{first}=this.state;
         const{last}=this.state;
         const{DOB}=this.state;
         const {Aadhaar}=this.state;
         const{PAN}=this.state;
         const{Gender}=this.state;
         const{Occupation}=this.state;
         const {Country}=this.state;
         const{State}=this.state;
         const{City}=this.state;
         const{Pincode}=this.state;
         const {Married}=this.state;
         const{Income}=this.state;
         const{Expense}=this.state;
         if(first==""){ 
           Keyboard.dismiss();                                  
       Alert.alert('Please enter the first name');    
       }
       
       else if(last==""){ 
         Keyboard.dismiss();                                  
     Alert.alert('Please enter the last name');    
     }
   
   //   else if(DOB==""){ 
   //     Keyboard.dismiss();                                  
   // Alert.alert('Please enter the date of birth');    
   // }
   
   else if(Aadhaar==""){ 
     Keyboard.dismiss();                                  
   Alert.alert('Please enter the aadhaar number');    
   }
   else if(PAN==""){ 
     Keyboard.dismiss();                                  
   Alert.alert('Please enter the PAN number');    
   }
   else if(Gender==""){ 
     Keyboard.dismiss();                                  
   Alert.alert('Please enter the gender');    
   }
   else if(Occupation==""){ 
     Keyboard.dismiss();                                  
   Alert.alert('Please enter the occupation');    
   }
   else if(Country==""){ 
     Keyboard.dismiss();                                  
   Alert.alert('Please enter the country');    
   }
   else if(State==""){ 
     Keyboard.dismiss();                                  
   Alert.alert('Please enter the state');    
   }
   else if(City==""){ 
     Keyboard.dismiss();                                  
   Alert.alert('Please enter the city');    
   }
   else if(Pincode==""){ 
     Keyboard.dismiss();                                  
   Alert.alert('Please enter the pincode');    
   }
   else if(Married==""){ 
     Keyboard.dismiss();                                  
   Alert.alert('Please enter the marital status');    
   }
   else if(Income==""){ 
     Keyboard.dismiss();                                  
   Alert.alert('Please enter the income');    
   }
   else if(Expense==""){ 
     Keyboard.dismiss();                                  
   Alert.alert('Please enter the expense');    
   }
   
else{   

     fetch('http://35.234.150.23:8087/api/userregistrationservice/user/10/userprofile', {
       method: 'PUT',
       headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
                },
       body: JSON.stringify({"firstname":first,"lastname":last,"profileimageurl":"photo.png","dob":"10:10:2000","gender":true,"maritalstatus":0,"aadhar":Aadhaar,"pan":PAN,"occupation":1,"address":"GB8, SowparnikaSaikrishna","country":Country,"state":State,"city":City,"pincode":Pincode,"income":1,"expense":0,"profiletype":"User"})
     })
     .then((response) => JSON.stringify(response.json())) 
     .then((responseData) => { console.log("response: " + responseData); })
     .catch((err) => { console.log(err); });
   
    }
   
   }
   
             onPick=()=>{
               ImagePicker.openPicker({
                 width: 300,
                 height: 400,
                 cropping: true
               }).then(image => {
                 console.log(image);
               });
             }
             onValueChange=(value: string)=> {
               this.setState({
                 
                Gender: value,
               
                });

             }
             onValueChange1=(value)=> {
                this.setState({
                 Occupation: value
                 });
              }
              onValueChange2=(value)=> {
                this.setState({
                 Married: value
                 });
              }
   
       render()
       {
        const { navigate } = this.props.navigation;
         
             return(
               <Container>
                     <Header style={{backgroundColor:'#4776e6'}}>
      <Left>
        <Button transparent>
          <Icon name='ios-menu'onPress={() => this.props.navigation.openDrawer()}  />
        </Button>
      </Left>
      <Body>
        <Title>Edit</Title>
      </Body>
      
    </Header>

    
                 <ScrollView style={{backgroundColor:'#091929'}}>
                    <Text>{'\n'}</Text>
                   <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <TouchableOpacity onPress={this.onPick} >
                   <Image source={require('../user.png')} style={{flex:1,justifyContent:'center',alignContent:'center', width:180,height:180}}  />
                   </TouchableOpacity>
                  
                   </View>
                   <Text>{'\n'}</Text>
               <View style={styles.alignment}> 
               <Item rounded>
             <Input placeholder='First Name'  placeholderTextColor='white'  onChangeText={first => this.setState({first})}   style={{color:'white',backgroundColor:'transparent',fontWeight:'bold'}} selectionColor={'white'} />
             
             </Item>
             <Text>{'\n'}</Text>                          
               </View>
   
               <View style={styles.alignment}> 
               <Item rounded>
             <Input placeholder='Last Name'  placeholderTextColor='white'  onChangeText={last => this.setState({last})}   style={{color:'white',backgroundColor:'transparent',fontWeight:'bold'}} selectionColor={'white'} />
             
             </Item>                            
               </View>
               <Text>{'\n'}</Text>
               <View>
               <Form>
               <Picker
                 note
                 mode="dropdown"
                 style={{ width: 180,color:'white' }}
                 selectedValue={this.state.Gender}
                 onValueChange={this.onValueChange.bind(this)}
               >
                 <Picker.Item label="Gender" value="key0" />
                 <Picker.Item label="Male" value="key1" />
                 <Picker.Item label="Female" value="key2" />
                 
               </Picker>
               
             </Form>
               </View>
   
                          <Text>{'\n'}</Text>
                          <View>
                              <Form>
                              <Picker
                 note
                 mode="dropdown"
                 iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                 style={{ width: 180,color:'white' }}
                 selectedValue={this.state.Married}
                 onValueChange={this.onValueChange2.bind(this)}
               >
                 <Picker.Item label="Married" value="key0" />
                 <Picker.Item label="Unmarried" value="key1" />
                 
                 
               </Picker>

                                  </Form>
                              </View>
                              <Text>{'\n'}</Text>
                          <View>
                          <Form>
               <Picker
                 note
                 mode="dropdown"
                 style={{ width: 180,color:'white' }}
                 selectedValue={this.state.Occupation}
                 onValueChange={this.onValueChange1.bind(this)}
               >
                 <Picker.Item label="Business" value="key0" />
                 <Picker.Item label="Private Service" value="key1" />
                 <Picker.Item label="Other/Unstated Occupation" value="key3" />
                 <Picker.Item label="Small Business Owner" value="key4" />
                 <Picker.Item label="Housewife" value="key5" />
                 <Picker.Item label="Government Offcial" value="key6" />
                 <Picker.Item label="Retired" value="key7" />
                 <Picker.Item label="Salaried" value="key8" />
                 <Picker.Item label="Self Employed Proffesional" value="key9" />
               </Picker>
             </Form>
              
                         </View>
                         <Text>{'\n'}</Text>
               <View style={styles.alignment}> 
          <Item rounded>
             <Input placeholder='Aadhaar'  placeholderTextColor='white'  onChangeText={Aadhaar => this.setState({Aadhaar})}   style={{color:'white',backgroundColor:'transparent',fontWeight:'bold'}} selectionColor={'white'} />
             
             </Item>                              
               </View>
               <Text>{'\n'}</Text>
               <View style={styles.alignment}> 
               <Item rounded>
             <Input placeholder='PAN'  placeholderTextColor='white'  onChangeText={PAN => this.setState({PAN})}   style={{color:'white',backgroundColor:'transparent',fontWeight:'bold'}} selectionColor={'white'} />
             
             </Item>                              
        
               </View>
               <Text>{'\n'}</Text>
                       
              
                 
                       <Item rounded>
             <Input placeholder='Country'  placeholderTextColor='white'  onChangeText={Country => this.setState({Country})}   style={{color:'white',backgroundColor:'transparent',fontWeight:'bold'}} selectionColor={'white'} />
             
             </Item>                              
         
               {/* </View>    */}
               <Text>{'\n'}</Text>
               <View style={styles.alignment}> 
               <Item rounded>
             <Input placeholder='State'  placeholderTextColor='white'  onChangeText={State => this.setState({State})}   style={{color:'white',backgroundColor:'transparent',fontWeight:'bold'}} selectionColor={'white'} />
             
             </Item>                              
                                       
               </View>
               <Text>{'\n'}</Text>
               <View style={styles.alignment}> 
               <Item rounded>
             <Input placeholder='City'  placeholderTextColor='white'  onChangeText={City => this.setState({City})}   style={{color:'white',backgroundColor:'transparent',fontWeight:'bold'}} selectionColor={'white'} />
             
             </Item>                              
                                      
               </View>
               <Text>{'\n'}</Text>
               <View style={styles.alignment}> 
               <Item rounded>
             <Input placeholder='Pincode'  placeholderTextColor='white'  onChangeText={Pincode => this.setState({Pincode})}   style={{color:'white',backgroundColor:'transparent',fontWeight:'bold'}} selectionColor={'white'} keyboardType='numeric' />
             
             </Item>                              
                                      
               </View>
               <Text>{'\n'}</Text>
               
                       
               
   
           <View style={styles.buttonContainer}>
             <Button rounded   
                 onPress={this.validate}
                 style={{flex:1,justifyContent:'center',alignItems:'center'}}
               color="#841584">
               <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Submit</Text>
               </Button>
             </View>
           
   
   </ScrollView>            
               </Container>
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
 