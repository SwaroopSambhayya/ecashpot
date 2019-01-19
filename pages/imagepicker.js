import React,{Component} from 'react';
import {View} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
 
 
export default class Imagep extends Component {
render(){
    return(
        
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          })
        
    );
}

}