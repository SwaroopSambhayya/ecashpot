import React,{ Component } from 'react';
import {Text,TextInput,ImageBackground,ScrollView,View,StyleSheet} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import {Input,Item,Button} from 'native-base';
import{createStackNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'
export default class Forgotscreen extends Component{
    static navigationOptions = {
        
        header:null,   
      };
    
render(){
    const { navigate } = this.props.navigation;
    return(
        <LinearGradient colors={['#4776e6','#8e54e9']} style={{flex:1}}>
       <ScrollView style={{flex:1}} > 
       <Item rounded style={{flex:1,marginTop:50}} >
          <Input placeholder='OTP'  placeholderTextColor='white' style={{color:'white',backgroundColor:'transparent',fontWeight:'bold'}} selectionColor={'white'} keyboardType='phone-pad'/>
          
          </Item>
          <Text>{'\n'}</Text>
   <Text>{'\n'}</Text>
         
<Button rounded style={{backgroundColor:'#ef0933',flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:'white',fontWeight:'bold',borderRadius:20}}>Verify</Text></Button>
      
      </ScrollView>        
        </LinearGradient>
    );
}

}
const styles=StyleSheet.create({
    container:{
        
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    }
})