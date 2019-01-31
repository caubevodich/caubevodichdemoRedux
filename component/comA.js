import React ,{Component} from 'react';
import {View,Text} from 'react-native';

import ComB from './comB';

export default class ComA extends Component {

    clickA(){
        this.refs.mrB.clickB();
    }

    render() {
      return (
        <View style={{width:200, height: 200, backgroundColor:'blue',justifyContent:'center',alignItems:'center'}}>
            <ComB ref='mrB' />
        </View>
      );
    }
}
  
