import React, { Component } from 'react';
import {SocialIcon} from 'react-native-elements';
import { Alert,Keyboard,TouchableOpacity,AppRegistry,StyleSheet, View,
  Text,Image,ImageBackground,TextInput,ScrollView,Linking ,YellowBox,AsyncStorage,BackHandler,AppState} from 'react-native';
import {Button,Container,Toast,Item,Input,Icon} from 'native-base';
import{createStackNavigator} from 'react-navigation';
import axios from 'axios';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import GoogleSignIn from 'react-native-google-sign-in';
import {GoogleSignin, GoogleSigninButton,statusCodes } from 'react-native-google-signin';

import FBSDK,{LoginButton,LoginManager } from 'react-native-fbsdk';
import LinearGradient from 'react-native-linear-gradient';
console.ignoreYellowBox = ['Warning: isMounted(...) is deprecated'];      
export default class HomeScreen extends Component {
  
  static navigationOptions = {
        
        header:null,   
      };
    
    constructor(props){
      super(props)   
      this.state={
        userphone:'',                                                  
        pass:''
    }
    }
    
    componentWillMount() {
      
      BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
      // GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      // .then(() => {
      //   // play services are available. can now configure library
      // })
      // .catch(err => {
      //   console.log('Play services error', err.code, err.message);
      // });  
      
    // GoogleSignin.configure({
    //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    //  // iosClientId: '<FROM DEVELOPER CONSOLE>', // only for iOS
    //   webClientId: '1027074378838-4jr9vsk4lte8js9420lqfli5i41vqi1c.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    //   //offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
     // hostedDomain: '', // specifies a hosted domain restriction
      //forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login
      //accountName: '', // [Android] specifies an account name on the device that should be used
  //  });
  }
    
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
  }
    onLogin=()=> {
      const {userphone}=this.state;
      const {pass}=this.state; 
      var obj;
      alph=/^[a-zA-Z]+$/
      var val=userphone.length.toString();
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
      else if(val!='10'){
        Keyboard.dismiss();
        Toast.show({
          text: 'Invalid phone number',
          buttonText: 'Okay',
          buttonTextStyle: { color: "#fff" },
          buttonStyle: { backgroundColor: "#5cb85c" },
          duration:3500
        });
      }
      else if(alph.test(userphone)){
        Keyboard.dismiss();
        Toast.show({
          text: 'Invalid phone number',
          buttonText: 'Okay',
          buttonTextStyle: { color: "#fff" },
          buttonStyle: { backgroundColor: "#5cb85c" },
          duration:3500
        });
      }
      else if(pass==""){
          Keyboard.dismiss();
          Toast.show({
            text: 'Password should not be empty',
            buttonText: 'Okay',
            buttonTextStyle: { color: "#fff" },
            buttonStyle: { backgroundColor: "#5cb85c" },
            duration:3500
          });
      }
      else {
        fetch('http://35.234.150.23:8082/user/login', {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            cellnumber: this.state.userphone,
            password: this.state.pass,
          })
        })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData.id);
          id=responseData.id;
          
        
          this.saveItem('refresh_token', responseData.refreshToken);
          if (responseData.refreshToken === null){
            Alert.alert('Please enter a valid phone number or password');
          }
          else{
          Alert.alert('Login Success!', 'press ok to continue'),
          this.props.navigation.navigate('Main');
          }
        })
        .done();
      }    
      
  }
  backAndroid() {
    this.props.navigation.navigate('Home')// Return to previous screen
    return true; // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
  }
  handleBackButton = () => {               
    Alert.alert(
        'Exit App',
        'Exiting the application?', [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
        }, ], {
            cancelable: false
        }
     );
     return true;
   }
  
   hasPlayServices=async()=>{
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // google services are available
    } catch (err) {
      console.error('play services are not available');
    }
   }
  signIn = async () => {
    
    
   // later in your code...
   
     await GoogleSignIn.configure({
       // iOS
       clientID: '1027074378838-4jr9vsk4lte8js9420lqfli5i41vqi1c.apps.googleusercontent.com',
    
       // iOS, Android
       // https://developers.google.com/identity/protocols/googlescopes
       scopes: ['https://www.googleapis.com/auth/drive.readonly']
    
       // iOS, Android
       // Whether to request email and basic profile.
       // [Default: true]
       // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a06bf16b507496b126d25ea909d366ba4
    //    shouldFetchBasicProfile: boolean,
    
    //    // iOS
    //    // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a486c8df263ca799bea18ebe5430dbdf7
    //    language: string,
    
    //    // iOS
    //    // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd
    //    loginHint: string,
    
    //    // iOS, Android
    //    // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#ae214ed831bb93a06d8d9c3692d5b35f9
    //    serverClientID: 'yourServerClientID',
    
    //    // Android
    //    // Whether to request server auth code. Make sure to provide `serverClientID`.
    //    // https://developers.google.com/android/reference/com/google/android/gms/auth/api/signin/GoogleSignInOptions.Builder.html#requestServerAuthCode(java.lang.String, boolean)
    //    offlineAccess: boolean,
       
    //    // Android
    //    // Whether to force code for refresh token.
    //    // https://developers.google.com/android/reference/com/google/android/gms/auth/api/signin/GoogleSignInOptions.Builder.html#requestServerAuthCode(java.lang.String, boolean)
    //    forceCodeForRefreshToken: boolean,
    
    //    // iOS
    //    // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a211c074872cd542eda53f696c5eef871
    //    openIDRealm: string,
    
    //    // Android
    //    // https://developers.google.com/android/reference/com/google/android/gms/auth/api/signin/GoogleSignInOptions.Builder.html#setAccountName(java.lang.String)
    //    accountName: 'yourServerAccountName',
    
    //    // iOS, Android
    //    // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a6d85d14588e8bf21a4fcf63e869e3be3
    //    hostedDomain: 'yourHostedDomain',
      });
    
     const user = await GoogleSignIn.signInPromise();
    
     console.log(user);
   }  
    async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);      
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  Auth(){
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
      if(result.isCancelled){
        console.log('login cancelled');
      }
      else{
        
        console.log('login successfull'+result.grantedPermissions.toString());
      }
    },function(error){
      console.log('error occured:'+error);
    })
  }
 
                       
  render() {
    const { navigate } = this.props.navigation;
    var id;  
    return (   
     
      <LinearGradient  colors={['#4776e6','#8e54e9']} style={{flex:1}}> 
      <ScrollView>
      
      <View style={styles.container}>
         <Text >{'\n'}</Text>
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:30,fontFamily:'cursive'}}>eCashPot</Text> 
          <Text >{'\n'}</Text>
        <Item rounded>
          <Input placeholder='Phone' placeholderTextColor='white' onChangeText={userphone=>this.setState({userphone})} style={{color:'white'}} selectionColor={'white'} keyboardType='phone-pad' />
          <Icon type="Ionicons" name="md-phone-portrait" style={{color:'#fff'}}/>
          </Item>                                                                  
         <Text >{'\n'}</Text>
        <Item rounded>
          <Input placeholder='Password' placeholderTextColor='white'secureTextEntry={true} onChangeText={pass=>this.setState({pass})} style={{color:'white'}} selectionColor={'white'} keyboardType='default'autoCapitalize="none" />
         <Icon type="FontAwesome" name="lock" style={{color:'#fff'}}/>
          </Item>
       </View>             
        <View style={styles.buttonContainer}>
        <Button block onPress={this.onLogin } style={{backgroundColor:'#091929',borderRadius:10}}>
          <Text style={{color:'white',justifyContent:'center',alignItems:'center',fontSize:20,fontWeight:'bold',elevation:2}}>Login</Text>
          </Button>      
        </View>                                                                  
        <Text onPress={()=>this.props.navigation.navigate('Forgot')} style={{textDecorationLine:'underline',justifyContent:'center',alignItems:'center',marginLeft:220,color:'white'}}>Forgot Password?</Text>                 
        <View style={styles.buttonContainer}>
        <Text style={{color:'white'}}>Don't have an account?</Text>        
        <Button block style={{backgroundColor:'#9b08cc',borderRadius:10,elevation:2}} onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={{color:'#ffff',fontWeight:'bold',fontSize:20}}>Signup</Text>
          </Button>
          
        </View>
        <Text style={{color:'white',flex:1,justifyContent:'center',alignItems:'center',marginLeft:140}}>Sign in via:</Text>       
        <View style={styles.alternativeLayoutButtonContainer}>
          <View style={{flexDirection:'row',flex:1}}>
                      
          <TouchableOpacity style={{flex:1,justifyContent:'space-evenly',alignItems:'stretch'}} >
          <SocialIcon style={{width:150,height:50,elevation:2}}
  button
  type='facebook'
  onPress={this.Auth}           
/>
</TouchableOpacity>
<TouchableOpacity onPress={this.signIn} style={{flex:1,justifyContent:'center',alignItems:'center',borderRadius:90,height:48,marginTop:7,elevation:1,backgroundColor:'#fff'}}>  
  <Image source={require('../g1.svg.png')}  style={{width:30,height:30,paddingTop:20}}/>
  </TouchableOpacity>  
         
</View>
        </View>
        
      
            </ScrollView>
            </LinearGradient>
    );   
  }
}
 export var id;
const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'space-evenly',
     alignItems:'center'
                             
    },    
    buttonContainer: {
      margin: 20,
      opacity:0.8       
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      opacity:0.8,
      
    },
    btn: {
      flex:1,
      flexDirection:'row',
      backgroundColor:'#ffffff',
      borderRadius:50,
      padding:5,
      marginBottom:10,
      marginTop:5,
      opacity:0.9,
      paddingTop:10,
      width:180,
      shadowOpacity: 0.5 ,
      borderWidth: 1,
      borderColor:'black',
      elevation:2
       
      
    },
    
      backgroundImage: {
          flex: 1,
          width: null,
          height: null,
      },
      overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#edf7fc',
        opacity: 0.3
      }
    ,
  })
  