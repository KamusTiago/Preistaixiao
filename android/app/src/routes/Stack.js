import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../views/Home'

class Stack extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const Stack = createNativeStackNavigator();
        return(
            <Stack.Navigator >
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator> 
        )
    }

}

export default Stack;