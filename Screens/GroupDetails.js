import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView,FlatList,LayoutAnimation, Platform, UIManager, TouchableOpacity} from "react-native";
import { Container, Header, Title, Button, Left, Right, Body, Icon, Tab, Tabs } from 'native-base';
import CardSection from '../copied/CardSection';
import Card from '../copied/Card.js';

console.ignoredYellowBox = ['warning: isMounted(...) is deprecated'];
 
class GroupDetails extends Component{
    static navigationOptions = ({ navigation, navigationOptions }) => {
        //console.log(navigationOptions);
        // Notice the logs ^
        // sometimes we call with the default navigationOptions and other times
        // we call this with the previous navigationOptions that were returned from
        // this very function
        // return {
        //   title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        //   headerStyle: {
        //     backgroundColor: navigationOptions.headerTintColor,
        //   },
        //   headerTintColor: navigationOptions.headerStyle.backgroundColor,
        // };
        return{
        title: 'Details',                                           
        headerStyle: {
          backgroundColor: '#4776e6',
                                                            
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };
    };
      
    constructor(props)
    {
        super(props);
        this.state = {uname:[],gdetails:[], cjoin:'Join', rs:'Request sent' };
        
    }
    componentWillMount()
    {
        const { navigation } = this.props;  
        const id = navigation.getParam('id', 'NO-ID');
        fetch('http://35.234.150.23:8087/api/groupmanagementservice/ecashpotgroup/'+id, {
            method: 'GET',
            headers: { 
                     'Accept': 'application/json',
                     'Content-Type': 'application/json' 
                     }
       })
        .then(function(response) {
            return response.json();
        })
        .then((responsedata) =>{
            this.setState({
                gdetails:responsedata
            });
        })

        var ids="";
        var i;
        fetch('http://35.234.150.23:8083/groupoperation/membership/'+id, {
            method: 'GET',
            headers: { 
                     'Accept': 'application/json',
                     'Content-Type': 'application/json' 
                     }
        })
        .then(function(response) {
            return response.json();
        })
        .then((responsedata1) =>{
           for( i in responsedata1)
           {
               ids=ids+responsedata1[i].userid+",";
           } 
           ids=ids.slice(0,-1);

           fetch('http://35.234.150.23:8082/users?ids='+ids, {
            method: 'GET',
            headers: { 
                     'Accept': 'application/json',
                     'Content-Type': 'application/json' 
                     }
            })
           .then(function(response) {
                return response.json();
            })
           .then((responseData) => {
               this.setState({
               uname:responseData
            });
          })
        })
    }
    changestate=()=>{
        const { navigation } = this.props;  
        const id = navigation.getParam('id', 'NO-ID');
        fetch('http://35.234.150.23:8083/groupmembership', {
            method: 'POST',
            body: JSON.stringify({"groupid":id,"status":"Join","userid":4}), 
            headers:{
              'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
            
    }
    renderItem = ({ item }) => {
        return(
            <CardSection>
                <View style = {{alignItems:'center'}}>
                    <Text style = {{fontSize:20, color:'white'}}>
                        {item.userProfile.firstname}
                    </Text>
                </View>
           </CardSection>
        )
    }
    render(){  
        return(
            <Container style={{backgroundColor:'#dbdbdb'}}>
            <ScrollView>
                <Tabs>
                    <Tab heading= "GroupDetails">
                        <Card>
                            <CardSection>
                                <View style={{alignItems:'center',justifyContent:'flex-start'}}><Text style ={{fontSize:20, fontWeight:'bold', color:'white'}}>{this.state.gdetails.name}</Text></View>
                            </CardSection>  
                        </Card>   
                        <Card>  
                            <CardSection>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>Group Amount</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>{this.state.gdetails.groupamount}</Text>
                                    </View>
                                </View>
                            </CardSection>
                            <CardSection>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>Member Count</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>{this.state.gdetails.membercount}</Text>
                                    </View>
                                </View>
                            </CardSection>  
                            <CardSection>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>Number of Installments</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>{this.state.gdetails.membercount}</Text>
                                    </View>
                                </View>
                            </CardSection>
                            <CardSection>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>Monthly Payment</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>{this.state.gdetails.monthlyamount}</Text>
                                    </View>
                                </View>
                            </CardSection>
                            <CardSection>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>Bidding Date</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>{this.state.gdetails.biddingdate}</Text>
                                    </View>
                                </View>
                            </CardSection>  
                            <CardSection>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>Bidding Time</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>{this.state.gdetails.biddingtime}</Text>
                                    </View>
                                </View>
                            </CardSection>  
                            <CardSection>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>Installment Date</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>{this.state.gdetails.installmentdate}</Text>
                                    </View>
                                </View>
                            </CardSection>
                            <CardSection>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>Credit Date</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>{this.state.gdetails.creditdate}</Text>
                                    </View>
                                </View>
                            </CardSection>
                            <CardSection>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>Commission</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                                        <Text style={style.textStyle}>{this.state.gdetails.commision}</Text>
                                    </View>
                                </View>
                            </CardSection>
                        </Card>
                    </Tab>
                    <Tab heading="Participants">
                        <Card>
                            <CardSection>
                                <FlatList
                                    data = {this.state.uname}
                                    renderItem = {this.renderItem}
                                    keyExtractor = {(uname)=>uname.id.toString()}
                                />
                            </CardSection>
                        </Card>
                    </Tab>
                </Tabs>
            </ScrollView>   
            <Button full success onPress={this.changestate}> 
                <Text style={{fontSize:25,fontWeight:'bold',color:'black'}}>{this.state.cjoin}</Text>
            </Button>  
        </Container>
    );
    }
}

const style = {
    textStyle:{
       color:'white',
       fontSize:17  
    }
}

export default GroupDetails;