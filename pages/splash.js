import React,{Component} from 'react';
import {ImageBackground,View} from 'react-native';
import HomeScreen from './login.js';
import {Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


export default class splash extends Component{
    static navigationOptions = {
        
        header:null,   
      };
    render(){
        const {navigate} = this.props.navigation;
        setTimeout(() => {
            navigate('Home'); //this.props.navigation.navigate('Login')
        }, 1500);
        return(
            <LinearGradient colors={['#4776e6','#8e54e9']} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View >
            <ImageBackground source={require('../logo1.png')} style={{width:230,height:230}}>
            </ImageBackground>        
        </View>
        <Spinner color='white' style={{justifyContent:'flex-end',alignItems:'center'}} />
        </LinearGradient>
        );
    }

}


