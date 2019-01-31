import React ,{Component} from 'react';
import {View,Text} from 'react-native';

import ComC from './comC';

export default class ComB extends Component {

    clickB(){
        this.refs.mrC.doimauC();
    }

    render() {
      return (
        <View style={{width:150, height: 150, backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
            <ComC ref='mrC'/>
        </View>
      );
    }
  }
  
