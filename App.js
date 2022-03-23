import React, {Component} from 'react'
import {View, Image ,Text, StyleSheet} from 'react-native'
import Home from './android/app/src/home/Home';

class App extends Component{

  render(){
    return(  
          <Home/>
    )
  }

}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 2
  }
})