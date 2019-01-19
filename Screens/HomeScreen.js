import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,Alert,
  TouchableOpacity,
  BackHandler,
  AppState
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

//library imports
import { Icon, Button, Container, Header, Content, Left,Right,Body,Title,DeckSwiper,Card,Thumbnail,CardItem } from 'native-base'
const cards = [
  {
    text: 'My Groups',
    name: 'Total groups joined',
    image: require('../Screens/Images/mygroup.jpg'),
  },
  {
    text: 'My Investments',
    name: 'Investment details',
    image: require('../Screens/Images/myinvest.jpg'),
  },
  {
    text: 'Dividend Earned',
    name: 'Total divident earned',
    image: require('../Screens/Images/mydiv.jpg'),
  },
  {
    text: 'Comission Paid',
    name: 'Total commission earned in a month',
    image: require('../Screens/Images/myinvest.jpg'),
  },
];



class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    statusBar:<StatusBar backgroundColor="#4776e6" barStyle="light-content" /> ,   
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Home',
    drawerIcon: () => (
      <Image
        source={require('./Images/home.png')}
        style={styles.icon}
      />
    ),
  })
  
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton); 
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
        },], {
            cancelable: false
        }
     );
     return true;
   }
 
aler=()=>{
  Alert.alert('hello');
}

  render() {
    
    return (
            
      <Container style={{flex:1}}>
        
        <LinearGradient colors={['#091929','#091929']} style={{flex:1}}>
        <Header style={{backgroundColor:'#4776e6'}}>
        <Left>
          <Button transparent>
            <Icon name='ios-menu'onPress={() => this.props.navigation.openDrawer()}  />
          </Button>
        </Left>
        <Body>
          <Title>Home</Title>
        </Body>
       
      </Header>

        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
         <View styles={styles.menuItem}>
            <Image  
              source={require('../groups.jpg')}
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
            
        
    
      </LinearGradient>
      </Container>
       );
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
  stext:{
    marginLeft:140,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize:15,
    color:'white'    
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
      borderColor: 'white',
      borderWidth: 3,
      justifyContent: 'center',
      alignItems: 'center'
  },
});