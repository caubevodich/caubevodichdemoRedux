// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

// import ComA from './component/comA';



// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//       <TouchableOpacity onPress={()=>{
//           this.refs.mrA.clickA();
//       }}>
//       <Text>Click Me</Text>
//       </TouchableOpacity>
//         <ComA ref='mrA'/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   }
// });


//// Demo Redux
// const {createStore} = require('redux');

// const defaultState = {value : 0};

// const reducer = (state = defaultState, action)=> {
//   if(action.type === 'UP') return {value : state.value + 1};
//   if(action.type === 'DOWN') return {value : state.value -1};
//   return state;
// };

// const store = createStore(reducer);

// console.log('TRUOC KHI DISPATH : '+ store.getState().value);

// store.dispatch({ type: 'UP'});


// console.log('TRUOC KHI DISPATH : '+ store.getState().value);


import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App2 from './App2';

//Redux
const defaultState = { value: 0, highlight : false };
const reducer = (state = defaultState, action) => {
  if (action.type === 'UP') return { value: state.value + 1, highlight: state.highlight };
  if (action.type === 'DOWN') return { value: state.value - 1, highlight: state.highlight };
  if(action.type === 'CHANGE_COLOR') return {value: state.value, highlight:!state.highlight};
  return state;
}
const store = createStore(reducer);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <App2 />
      </Provider>
    );
  }
}

 



