import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left,Right,Body,Title,DeckSwiper,Card,Thumbnail } from 'native-base'




class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Home',
    drawerIcon: () => (
      <Image
        source={require('./Images/home.png')}
        style={styles.icon}
      />
    ),
  })


  render() {
    
    return (
      <ScrollView style={{flex:1}} >
    
<StatusBar hidden={true} backgroundColor='transparent'  />
           
        <Header style={{backgroundColor:'#091929'}} >
            <Left ><Icon name="ios-menu" onPress={() => this.props.navigation.openDrawer()} style={{color:'white'}}  /></Left>
            <Body>
                <Title>Home</Title>
            </Body>
            <Right />
        </Header>
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
         <View styles={styles.menuItem}>
            <Image  
              source={require('./Images/mygroup.jpg')}
              style={styles.image}/>
              <Text style={{fontWeight: 'bold',fontSize: 20,color: 'black',position:'absolute',top: 43,left: 76}}>{" My Groups "}</Text>
          </View>
        </Content>
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
         <View styles={styles.menuItem}>
            <Image  
              source={require('./Images/myinvest.jpg')}
              style={styles.image}/>
              <Text style={{fontWeight: 'bold',fontSize: 20,color: 'black',position:'absolute',top: 43,left: 50}}>{" My Investments "}</Text>
          
          </View>
        </Content>
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
         <View styles={styles.menuItem}>
            <Image  
              source={require('./Images/mydiv.jpg')}
              style={styles.image}/>
              <Text style={{fontWeight: 'bold',fontSize: 20,color: 'black',position:'absolute',top: 43,left: 47}}>{" Dividend Earned "}</Text>
          
          </View>
        </Content>
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
         <View styles={styles.menuItem}>
            <Image  
              source={require('./Images/mycom.jpg')}
              style={styles.image}/>
              <Text style={{fontWeight: 'bold',fontSize: 20,color: 'black',position:'absolute',top: 43,left: 41}}>{" Commission Paid "}</Text>
          
          </View>
        </Content>
        
      
      </ScrollView>
    )
  }
}

export default HomeScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,

  },
  statusBar: {
    backgroundColor: "#C2185B",
    
  },

  menuItem: {
      width: 260,
      height:120,
      padding: 20,
  },
  image: {
      width: 250,
      height: 115,
      opacity: 0.8,
      borderColor: '#091929',
      borderWidth: 3,
      justifyContent: 'center',
      alignItems: 'center'
  },
});