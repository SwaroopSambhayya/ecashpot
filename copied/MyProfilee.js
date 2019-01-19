import React, { Component } from "react";
import { View, Text, StyleSheet,Button, Image , ScrollView, TouchableOpacity , NativeModules , Alert , Keyboard} from "react-native";
import { Dropdown } from 'react-native-material-dropdown';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
//import moment from 'moment';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import ProD from 'C:/GS/pages/ProD';


class MyProfilee extends Component {
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
              Gender:'',
              Occupation:'',
              Country:'',
              State:'',
              City:'',
              Pincode:'',
              Married:'',
              Income:'',
              Expense:''

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
          

      DatePickerMainFunctionCall = () => {
     
        let DateHolder = this.state.DateHolder;
     
        if(!DateHolder || DateHolder == null){
     
          DateHolder = new Date();
          this.setState({
            DateHolder: DateHolder
          });
        }
     
        //To open the dialog
        this.refs.DatePickerDialog.open({
     
          date: DateHolder,
     
        });
     
      }

      
onDatePickedFunction = (date) => {
    this.setState({
      dobDate: date,
      DateText: moment(date).format('DD-MM-YYYY')
    });
  }


    render()
    {

        let gender = [{
            value: 'Male',
          },
           {
            value: 'Female',
          }, 
          {
            value: 'Others',
          }];

          let status = [{
            value: 'Married',
          },
           {
            value: 'Single',
          }];

          let occupation = [{
            value: 'Bussiness',
          },
           {
            value: 'Private Service',
          },
           {
            value: 'Other/Unstated Occupation',
          },
          {
            value: 'Housewife',
          },
          {
            value: 'Small Business Owner',
          },
          {
            value: 'Government Service',
          },
          {
            value: 'Retired',
          },
          {
            value: 'Salaried',
          },
          {
            value: 'Self-Employed Professional',
          }];

          let income = [{
            value: '0-19,999',
          },
           {
            value: '20,000-39,999',
          },
           {
            value: '40,000-59,999',
          },
          {
            value: '60,000-79,999',
          },
          {
            value: '80,000-99,999',
          },
          {
            value: '1,00,000-1,49,999',
          },
          {
            value: '1,50,000-1,99,999',
          },
          {
            value: '2,00,000+',
          }];

         
          return(
              <ScrollView>
                <TouchableOpacity onPress={this.onPick}>
                <Image source={require('C:/GS/user.png')} style={{marginLeft:50}}  />
                </TouchableOpacity>

          
            <View style={styles.alignment}> 
               <FormLabel labelStyle={{color:'black'}}>First Name</FormLabel>
                    <FormInput
                    inputStyle={{color:'black'}} 
       onChangeText={first => this.setState({first})}
                    style={{
                 // size/width of the border
              // color of the border
                                 
                    paddingLeft: 10,
                    height: 40,                                              
                    }}
        />                                  
            </View>

            <View style={styles.alignment}> 
               <FormLabel labelStyle={{color:'black'}}>Last Name</FormLabel>
                    <FormInput 
                    inputStyle={{color:'black'}} 
                 onChangeText={last => this.setState({last})}
                    style={{
                 // size/width of the border
              // color of the border
                                 
                    paddingLeft: 10,
                    height: 40,                                              
                    }}
        />                                  
            </View>

            <View style={styles.container}> 
            <FormLabel labelStyle={{color:'black'}}>Date Of Birth</FormLabel>             
            <TouchableOpacity onPress={this.DatePickerMainFunctionCall.bind(this)} >
            
          
            
 
            <View style={styles.datePickerBox}>
 
              <Text style={styles.datePickerText}>{this.state.DateText}</Text>
 
            </View>
 
          </TouchableOpacity>
          <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePickedFunction.bind(this)}
        
       />
       
            </View>

            <View style={styles.alignment}> 
               <FormLabel labelStyle={{color:'black'}}>Aadhaar</FormLabel>
                    <FormInput keyboardType='numeric'
                    inputStyle={{color:'black'}} 
       onChangeText={Aadhaar => this.setState({Aadhaar})}
                    style={{
                 // size/width of the border
              // color of the border
                                 
                    paddingLeft: 10,
                    height: 40,                                              
                    }}
        />                                  
            </View>

            <View style={styles.alignment}> 
               <FormLabel labelStyle={{color:'black'}}>PAN</FormLabel>
                    <FormInput
                    inputStyle={{color:'black'}} 
        onChangeText={PAN => this.setState({PAN})}
                    style={{
                 // size/width of the border
              // color of the border
                                 
                    paddingLeft: 10,
                    height: 40,                                              
                    }}
        />                                  
            </View>

                    
            <Dropdown label='Gender '  data={gender}  style={{
                 // size/width of the border
              // color of the border
              
                    fontWeight:'Bold',          
                   paddingLeft: 10,
                    height: 40                                             
                    }}
                onChangeText={Gender => this.setState({Gender})}
                
               />                                 

         
            <Dropdown label='Occupation Type ' data={occupation} style={{
                 // size/width of the border
              // color of the border
                                 
                    paddingLeft: 10,
                    height: 40                                             
                    }}
                    onChangeText={Occupation => this.setState({Occupation})}
                     />   

                    <View style={styles.alignment}> 
               <FormLabel labelStyle={{color:'black'}}>Country</FormLabel>
                    <FormInput 
                    inputStyle={{color:'black'}} 
       onChangeText={Country => this.setState({Country})}
                    style={{
                 // size/width of the border
              // color of the border
                                 
                    paddingLeft: 10,
                    height: 40,                                              
                    }}
        />                                  
            </View>   

            <View style={styles.alignment}> 
               <FormLabel labelStyle={{color:'black'}}>State</FormLabel>
                    <FormInput
                    inputStyle={{color:'black'}} 
      onChangeText={State => this.setState({State})}
                    style={{
                 // size/width of the border
              // color of the border
                                 
                    paddingLeft: 10,
                    height: 40,                                              
                    }}
        />                                  
            </View>

            <View style={styles.alignment}> 
               <FormLabel labelStyle={{color:'black'}}>City</FormLabel>
                    <FormInput 
                    inputStyle={{color:'black'}} 
        onChangeText={City => this.setState({City})}
                    style={{
                 // size/width of the border
              // color of the border
                                 
                    paddingLeft: 10,
                    height: 40,                                              
                    }}
        />                                  
            </View>

            <View style={styles.alignment}> 
               <FormLabel labelStyle={{color:'black'}}>Pincode</FormLabel>
                    <FormInput keyboardType='numeric'
                    inputStyle={{color:'black'}} 
        onChangeText={Pincode => this.setState({Pincode})}
                    style={{
                 // size/width of the border
              // color of the border
                                 
                    paddingLeft: 10,
                    height: 40,                                              
                    }}
        />                                  
            </View>

            <Dropdown label='Marital Status ' data={status} style={{
                 // size/width of the border
              // color of the border       
                    paddingLeft: 10,
                    height: 40                                             
                    }}
                 onChangeText={Married => this.setState({Married})}
                   /> 

                    <Dropdown label='Income ' data={income} style={{
                 // size/width of the border
              // color of the border
                                 
                    paddingLeft: 10,
                    height: 40                                             
                    }} 
                   onChangeText={Income => this.setState({Income})}
                /> 

                    <View style={styles.alignment}> 
               <FormLabel labelStyle={{color:'black'}}>Expense</FormLabel>
                    <FormInput keyboardType='numeric'
                    inputStyle={{color:'black'}} 
        onChangeText={Expense => this.setState({Expense})}
                    style={{
                 // size/width of the border
              // color of the border
                                 
                    paddingLeft: 10,
                    height: 40,                                              
                    }}
        />                
        </View> 

        <View style={styles.buttonContainer}>
          <Button    
              onPress={this.validate}
            title="Submit"      
            color="#841584"/>
          </View>

</ScrollView>            
        );
    }
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'black',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0,height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        fontSize : 20
    },

    buttonContainer: {
      margin: 20,
      opacity:0.8       
    },

    datePickerBox:{
        marginTop: 9,
        borderColor: 'black',
        borderWidth: 0.5,
        padding: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        height: 30,
        marginLeft: 20,
        justifyContent:'center'
      },
     
      datePickerText: {
        fontSize: 14,
        marginLeft: 5,
        borderWidth: 0,
        color: 'black',
     
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


export default MyProfilee;











