import React, { Component } from "react";
import { View, Text,FlatList,SectionList, StyleSheet, ScrollView, TouchableOpacity,ActivityIndicator, Image } from "react-native";
import { Container,Content, Header, Title, Button, Left, Right, Body, Icon, Tab, Tabs } from 'native-base';
import CardSection from '../copied/CardSection';
import Card from '../copied/Card.js';
import GroupDetails from './GroupDetails';
import { createStackNavigator} from 'react-navigation';
console.ignoredYellowBox = ['warning: isMounted(...) is deprecated'];
 export class Groups extends Component {
     static navigationOptions={
         header: null
     }
    constructor(props)
    {
        super(props);
        this.state ={ open:[],joined:[], isLoading:true } 
    }
    renderItem = ({ item }) => {
    return(
        <TouchableOpacity onPress={() => this.props.navigation.navigate('GroupDetail',{id:item.id})}>
        <Card>
                <CardSection>
                    <View style = {{alignItems:'center'}}>
                <Text style = {{fontSize:20, fontWeight: 'bold', color:'white'}}>
                    {item.name}
                </Text>
                </View>
                <View style = {{alignItems:'center'}}>
                <Text style = {{fontSize:17, color:'white'}}>
                Group Amount: {item.groupamount}
                </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{flex:1, alignItems:'flex-start'}}>
                    <Text style = {{fontSize:17, color:'white'}}>
                        Monthly Payment: {item.monthlyamount}
                    </Text>
                </View>
                <View style={{flex:1, alignItems:'flex-end'}}>
                    <Text style = {{fontSize:17, color:'white'}}>
                        Installments: {item.membercount}
                    </Text>
                </View>
                </View>
                </CardSection>
            </Card>
            </TouchableOpacity>
    )
    }
    componentWillMount()
    {
        fetch('http://35.234.150.23:8083/groupoperation/membership/user/3')
        .then(function(response) {
            return response.json();
        })
        .then((responsedata) =>{
            this.setState({
                joined:responsedata
        });
    })
        fetch('http://35.234.150.23:8087/api/groupmanagementservice/ecashpotgroup')
        .then(function(response) {
            return response.json();
        })
        .then((responsedata) =>{
            this.setState({
                open:responsedata
        });
    })
    }
    
    render(){
        const { navigation } = this.props;
        return(
            <View>
           
                  
                <FlatList 
                    style={styles.container}
                    data = {this.state.open}
                    renderItem = {this.renderItem}
                    keyExtractor = {(open)=>open.id.toString()}
                />
                </View>
        )
    }
}
const groupnav=createStackNavigator(
    {
        group:{
            screen: Groups
        },
        GroupDetail: {
            screen: GroupDetails
        }
    }
);

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    container : {
      backgroundColor:'#091929',
    }
  });
export default groupnav;
