import React, {Component} from 'react';
import { StyleSheet, Image, Text, StatusBar,View } from 'react-native';
import {Container} from 'native-base'
import AppIntroSlider from 'react-native-app-intro-slider';
import App from '../App';
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  text:{
    fontWeight:'bold',
  }
});
 
const slides = [
  {
    key: 'somethun',
    title: 'eCashPot : Bank For All',
    text: 'One stop for your money!',
    image: require('../one.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#380d6d'
  },
  {
    key: 'somethun-dos',
    title: 'Save Like Never Before!',
    text: 'Borrow money whenever needed',
    textStyle:styles.text,
    image: require('../image2.png'),
    imageStyle: styles.image,
    backgroundColor: '#091929',
  },
  {
    key: 'somethun1',
    title: 'Make Money For Future!',
    text: 'Make your dreams come true',
    image: require('..//image3.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#39557f',
  }
];
 
class Intro extends Component {
    constructor(props){
        super(props);
  this.state = {
    showRealApp: false
  }
}

static navigationOptions = {
  header:null,
}

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate('Main');
  }
  render() {
  
  return(
   <View style={{flex:1}}>
  <StatusBar />
  <AppIntroSlider slides={slides} onDone={this._onDone} />
    </View>
    );  
}
  
  }


export default Intro;