import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import axios from 'axios';

//library imports
import { Icon, Button, Container, Header, Content,Left,Body,Right,Title } from 'native-base';

//custom components imports 
import CustomHeader from './Components/CustomHeader'

class MyProfileScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      profile:[]
    }
  }
  componentWillMount(){
    axios.get('http://35.234.150.23:8087/api/userregistrationservice/user/')
    .then(res=>{
      const profile=res.data;
      this.setState({ profile})
    })
  }
  static navigationOptions = ({ navigation }) => ({
    title: "My Profile",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />,
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./Images/manuser.png')}
        style={styles.icon}
      />
    ),
  })


  render() {
    return (

      <Container style={styles.container}>

<Header style={{backgroundColor:'#091929'}}>
            <Left><Icon name="ios-menu"style={{color:'white'}} onPress={() => this.props.navigation.openDrawer()} /></Left>
            <Body>
                <Title>My Profile</Title>
            </Body>
            <Right />
        </Header>

        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
      {this.state.profile.map(profile=><Text>{profile.cellnumber}</Text>)}          
          
        </Content>

      </Container>

    )
  }

}

export default MyProfileScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container : {
    backgroundColor:'#d7d8dd',
  }
});