import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'


class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textoHome}>
                    <Text style={styles.estiloTextoHome}>Bem-vindo(a) ao </Text>
                    <Text style={styles.estiloTextoHome}>Preistaixion App </Text>
                </View>
                <View>
                    <Text style={{
                        color: '#ffff',
                        fontSize: 25,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>Vamos lá!</Text>
                </View>
                <Button  title='Iniciar sessão'/>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2457ff',
        flex: 1
    },
    textoHome: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    estiloTextoHome: {
        fontSize: 30,
        color: '#ffff',
    },
    
})