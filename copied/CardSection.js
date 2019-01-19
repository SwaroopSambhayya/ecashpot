import React, {Component} from 'react';
import { View } from 'react-native';
import Card from './Card.js';

const CardSection = (props) =>{
return(
    <View style={styles.containerStyle}>
        {props.children}
    </View>
    );
};

const styles = {
    containerStyle:{
        borderBottomWidth:1,
        padding:10,
        backgroundColor:'#091929',
        //justifyContent:'flex-start',
        //flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'

    }
}


export default CardSection;