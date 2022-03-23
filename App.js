import React, {Component} from 'react'
import {View, Image ,Text, StyleSheet} from 'react-native'
import Home from './android/app/src/home/Home';
import Login from './android/app/src/views/Login';

class App extends Component{

  render(){
    return(  
           <Home/>
         // <Login/>
    )
  }

}

export default App;