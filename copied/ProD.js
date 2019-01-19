import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image,StatusBar,Alert} from "react-native";
import {Fetch} from 'react-native-fetch';
import axios from 'axios';
import { Icon, Button, Container, Header, Content,Left,Body,Right,Title } from 'native-base';
import CardSection from 'C:/GS/pages/CardSection';
import Card from 'C:/GS/pages/Card';
import api from 'C:/GS/pages/api';
import MyProfilee from 'C:/GS/pages/MyProfilee';
import {createStackNavigator} from 'react-navigation'


export default class ProD extends Component {
    render(){
      return(
        <HeapStack/>
      );
    }
}
class pdetails extends Component{
  render(){
    return(
      <MyProfilee/>
    )
  }
}
class ProfileScreen extends Component{
  constructor(props){
    super(props);

    this.state = {
        
        fname:'',
        lname:'',
        pim:'',
        dobi:'',
        g:'',
        ms:'',
        ad:'',
        pa:'',
        occ:'',
        add:'',
        co:'',
        st:'',
        cit:'',
        pc:'',
        inc:'',
        ex:'',

    }
}

static navigationOptions = ({ navigation }) => ({
  header:null,  
  title: "My Profile",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />,
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('C:/GS/Pictures/manuser.png')}
        style={styles.icon}
      />
    ),
  })



componentWillMount(){
    var uri='35.234.150.23:8087/api/userregistrationservice/user/';
          
}
myfunc(){
  
    return(
      <MyProfilee/>
    );
  
}

/*  state = { profile:[] }
    componentWillMount(){
    axios.get('http://35.234.150.23:8087/api/userregistrationservice/user/',{
    params:{
        id:1
    }
    })

        .then(res => {
            const profile = res.data;
            console.log(res.data);
            this.setState({ profile });
          })
     
    }*/

    
render(){
    fetch('http://35.234.150.23:8087/api/userregistrationservice/user/')
    .then(function(response) {
        return response.json();
      })
      .then((responseData)=>{
          this.setState({
              fname:responseData[2].userProfile.firstname,
              lname:responseData[2].userProfile.lastname,
              ad:responseData[2].userProfile.aadhar,
              pa:responseData[2].userProfile.pan,
              dobi:responseData[2].userProfile.dob,
              g:responseData[2].userProfile.gender,
              ms:responseData[2].userProfile.maritalstatus,
              occ:responseData[2].userProfile.occupation,
              add:responseData[2].userProfile.address,
              co:responseData[2].userProfile.country,
              st:responseData[2].userProfile.state,
              cit:responseData[2].userProfile.city,
              pc:responseData[2].userProfile.pincode,
              inc:responseData[2].userProfile.income,
              ex:responseData[2].userProfile.expense
          })
      })
        
    console.log('Email',this.state.details)
    return(
       
        <ScrollView style={{flex:1,backgroundColor:'#091929'}}> 
            <StatusBar color='black'/>     
    <Header style={{backgroundColor:'black'}}>
      <Left>
        <Button transparent>
          <Icon name='ios-menu'onPress={() => this.props.navigation.openDrawer()}  />
        </Button>
      </Left>
      <Body>
        <Title>Profile</Title>
      </Body>
      <Right>
        <Button transparent onPress={()=>this.props.navigation.navigate('pd')}>
          <Icon type='Entypo' name='edit' />
        </Button>
      </Right>
    </Header>
  
                
                <Content
                  contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                </Content>
              
        
        
    
        <Card>

        <CardSection >
        <View style = {{flexDirection: 'row',alignItems:'flex-start',backgroundColor:'#091929'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start', backgroundColor:'#091929'}}>
        {/* <Text>this.state.title</Text>
        <Fetch
    url="'http://35.234.150.23:8082/user/1/userprofile"
    
    onLoad={() => console.log('Started fetching data...')}
    onFetch={({ data }) => this.setState(() => ({ title: data.title }))}
    onError={({ error }) => this.reportError(error)}
    render={this.renderContent}
  /> */}
        
        <Text style ={{fontWeight:'bold', fontSize: 15 , color: 'white'}}> First Name : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start', backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white',borderLeftWidth:2}}>{this.state.fname}</Text>
        </View>
        </View>
        </CardSection>
       
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Last Name : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.lname}</Text>
        </View>
        </View>
        </CardSection>
    
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Date of Birth : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.dobi}</Text>
        </View>
        </View>
        </CardSection>

        
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Gender : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.g}</Text>
        </View>
        </View>
        </CardSection>

        
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Marital Status : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.ms}</Text>
        </View>
        </View>
        </CardSection>

        
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Occupation : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.occ}</Text>
        </View>
        </View>
        </CardSection>

        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Aadhaar Number : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.ad}</Text>
        </View>
        </View>
        </CardSection>

        
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> PAN : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.pa}</Text>
        </View>
        </View>
        </CardSection>


        
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Address : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.add}</Text>
        </View>
        </View>
        </CardSection>

        
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Country : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.co}</Text>
        </View>
        </View>
        </CardSection>

        
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> State : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.st}</Text>
        </View>
        </View>
        </CardSection>

        
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> City : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.cit}</Text>
        </View>
        </View>
        </CardSection>

        
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Pincode : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.pc}</Text>
        </View>
        </View>
        </CardSection>

        
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Income : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.inc}</Text>
        </View>
        </View>
        </CardSection>

        
        <CardSection>
        <View style = {{flexDirection: 'row',alignItems:'flex-start'}}>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}> Expense : </Text>
        </View>
        <View style = {{flex: 1,alignItems:'flex-start', flexDirection:'row', justifyContent:'flex-start',backgroundColor:'#091929'}}>
        <Text style ={{fontWeight:'bold' , fontSize: 15 , color: 'white'}}>{this.state.ex}</Text>
        </View>
        </View>
        </CardSection>

       </Card>
       
       
       </ScrollView>
    )
  }
}

const styles = {
   containerStyle:{
       backgroundColor:'#091929',
       position:'relative',
       borderWidth: 1,
       borderRadius: 2,
       borderColor: '#ddd',
       borderBottomWidth: 0,
       shadowColor: '#000',
       elevation: 1,
       shadowOpacity: 1,
       shadowRadius: 2,
   },
   icon:{
      width: 24,
    height: 24, 
   }
   

};
 const HeapStack = createStackNavigator(
    {
    Profile:ProfileScreen,
      
      pd: pdetails  
      
    //   Det: { 
    //   screen :Details,
    // },
  }, 
    {
      initialRouteName: 'Profile',
    }
  
  );

