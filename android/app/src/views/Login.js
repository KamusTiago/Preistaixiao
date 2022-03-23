import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'


class Login extends Component{


constructor(props){
    super(props);
}

render(){
    return(
        <View style={{flex: 1, backgroundColor: 'pink'}}>
            <Text>
                Essa é a tela de login
            </Text>
        </View>

    )
}



}

export default Login;