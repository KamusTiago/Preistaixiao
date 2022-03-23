import React, {Component} from 'react'
import {Text, View, SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './Stack'


class Navegacao extends Component{


    constructor(props){
        super(props)
    }

    render(){
        return(
              <NavigationContainer>
                  <Stack/>
              </NavigationContainer>         
        )
    }
}

export default Navegacao;