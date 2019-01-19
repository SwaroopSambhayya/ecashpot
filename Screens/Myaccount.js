import React, {Component} from 'react';

import { View ,Text ,Image } from 'react-native';
import CardSection from '../copied/CardSection';
import Card from '../copied/Card.js';

class Myaccount extends Component {
    render() {
        return(
            <View>
            <Card>
                <CardSection> 
                    <View style = {styles.headerContentStyle}>
                    <Image  
                    source={require('../Pictures/download.png')}
                    style={styles.imageStyle}/>
                    <View style={{flex: 1, alignItems:'flex-start'}}>
                    <Text style ={{fontWeight:'Bold' , fontSize: 20 , color: 'white' , paddingTop: 10 }}> Total Savings </Text>
                    </View>
                    <View style={{flex: 1, alignItems:'flex-end'}}>
                    <Text style ={{fontWeight:'Italic' , fontSize: 20 , color: 'white' , paddingTop: 10 }}>10000</Text>
                    </View>
                    </View>
                </CardSection>
                 </Card>

<Card>
<CardSection> 
    <View style = {styles.headerContentStyle}>
    <Image  
    source={require('../Pictures/award-icon-06.png')}
    style={styles.imageStyle}/>
    <View style={{flex: 1, alignItems:'flex-start'}}>
    <Text style ={{fontWeight:'Bold' , fontSize: 20 , color: 'white' , paddingTop: 10  }}> Total Prize </Text>
    </View>
    <View style={{flex: 1, alignItems:'flex-end'}}>
    <Text style ={{fontWeight:'Italic' , fontSize: 20 , color: 'white' , paddingTop: 10 }}>10000</Text>
    </View>
    </View>
</CardSection>
 </Card>

<Card>
                <CardSection> 
                    <View style = {styles.headerContentStyle}>
                    <Image  
                    source={require('../Pictures/downloaddiv.jpg')}
                    style={styles.imageStyle}/>
                    <View style={{flex: 1, alignItems:'flex-start'}}>
                    <Text style ={{fontWeight:'Bold' , fontSize: 20 , color: 'white' , paddingTop: 10  }}> Total Dividend </Text>
                    </View>
                    <View style={{flex: 1, alignItems:'flex-end'}}>
                    <Text style ={{fontWeight:'Italic' , fontSize: 20 , color: 'white' , paddingTop: 10 }}>10</Text>
                    </View>
                    </View>
                </CardSection>
                 </Card>

<Card>
                <CardSection> 
                    <View style = {styles.headerContentStyle}>
                    <Image  
                    source={require('../Pictures/imagesearned.png')}
                    style={styles.imageStyle}/>
                    <View style={{flex: 1, alignItems:'flex-start'}}>
                    <Text style ={{fontWeight:'Bold' , fontSize: 20 , color: 'white' , paddingTop: 10 }}>Commission Earned </Text>
                    </View>
                    <View style={{flex: 1, alignItems:'flex-end'}}>
                    <Text style ={{fontWeight:'Italic' , fontSize: 20 , color: 'white' , paddingTop: 10}}>100</Text>
                    </View>
                    </View>
                </CardSection>
                 </Card>

<Card>
                <CardSection> 
                    <View style = {styles.headerContentStyle}>
                    <Image  
                    source={require('../Pictures/19923-200earned.png')}
                    style={{height:50,width:50,backgroundColor:'white',borderRadius:1,borderWidth:1}}/>
                    <View style={{flex: 1, alignItems:'flex-start'}}>
                    <Text style ={{fontWeight:'Bold' , fontSize: 20 , color: 'white' , paddingTop: 10 }}>Comission Charged </Text>
                    </View>
                    <View style={{flex: 1, alignItems:'flex-end'}}>
                    <Text style ={{fontWeight:'Italic' , fontSize: 20 , color: 'white' , paddingTop: 10}}>1000</Text>
                    </View>
                    </View>
                </CardSection>
                 </Card>

                </View>



        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection:'row',
        justifyContent:'space-around',
        

    },
    imageStyle:{
        height:50,
        width:50
    }
};


export default Myaccount;