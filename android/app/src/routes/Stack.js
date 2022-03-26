import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../views/Home'
import Login from '../views/Login'

class Stack extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const Stack = createNativeStackNavigator();
        return(
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
                <Stack.Screen  name='Home' component={Home}/>
                <Stack.Screen name='Login' component={Login}/>
            </Stack.Navigator> 
        )
    }

}

export default Stack;