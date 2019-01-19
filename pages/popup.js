import React,{Component} from 'react';
import PopupDialog from 'react-native-popup-dialog';
import { Button,View,Text } from 'react-native'
export default class popup extends Component { 
render(){
        return(
    <View >
  <Button
    title="Show Dialog"
    onPress={() => {
      this.popupDialog.show();
    }}
  />
  <PopupDialog
    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
  >
    <View>
      <Text>Hello</Text>
    </View>
  </PopupDialog>
</View>
        );
    }
}