import React, { Component } from "react";
import { View, Text, StyleSheet, Image , ScrollView, TouchableOpacity , NativeModules , Alert , Keyboard,BackHandler} from "react-native";
//import { Dropdown } from 'react-native-material-dropdown';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import moment from 'moment';

import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import {Header,Container,Left,Right,Title,Icon,Body,Button,Input,Item,Picker,Form} from 'native-base';
import ProD from '../pages/ProD.js';


class MyProfile extends Component {
  static navigationOptions = {
   header: null
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
              Occupation:'',
              Country:'',
              State:'',
              City:'',
              Pincode:'',
              Married:'',
              Income:'',
              Expense:'',
              selected:"key0",


            }
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


// else{
//   fetch('http://35.234.150.23:8087/api/userregistrationservice/user/?id=2', {
//     method: 'POST',
//     headers: { 
//              'Accept': 'application/json',
//              'Content-Type': 'application/json' 
//              },
//     body: JSON.stringify({id:2,"userProfile":{"id":2,"firstname":first,"lastname":last,"profileimageurl":null,"profiletype":true,"dob":null,"gender":true,"maritalstatus":1,"aadhar":Aadhaar,"pan":PAN,"occupation":0,"address":null,"country":Country,"state":State,"city":City,"pincode":Pincode,"income":10000,"expense":Expense}})
//   })
//   .then((response) => JSON.stringify(response.json())) 
//   .then((responseData) => { console.log("response: " + responseData); })
//   .catch((err) => { console.log(err); });
// }


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
          onValueChange=(value)=> {
            this.setState({
              selected: value
            });
          }
          onOccChange=(value)=> {
            this.setState({
              
              Occupation: this.value
            });
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
    render()
    {
      
      
          return(
            <Container>
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
              style={{ width: 120 }}
              selectedValue={this.state.selected}
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
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange}
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
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'white',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0,height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
      
        
        marginTop: 10,
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        fontSize : 20
    },

    buttonContainer: {
      margin: 20,
      opacity:0.8       
    },

    
    container: {
        flex: 1,
      //  backgroundColor: '#FFFFFF',
       // marginTop: 100,
      },
      
    menuItem: {
        width: 300,
        height: 200,
        padding: 5

    },
    alignment:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    }

};


export default MyProfile;











