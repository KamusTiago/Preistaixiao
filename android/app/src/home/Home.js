import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textoHome}>
                <Image style={{width: 150, height: 150}} source={require('../../../app/assets/img/logopsbranca.png')}/>
                    <Text style={styles.estiloTextoHome}>Bem-vindo(a) ao </Text>
                    <Text style={styles.estiloTextoHome}>Preistaixion App </Text>
                </View>
                <View style={{alignItems: 'center', paddingBottom: 50}}>
                    <Text style={{
                        color: '#ffff',
                        fontSize: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: 15
                    }}>Vamos lá!</Text>
                <TouchableOpacity style={styles.botao}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>
                                Iniciar sessão
                        </Text>
                    </View>
                </TouchableOpacity>
                </View>
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
    botao:{
        width: 300,
        height: 50,
        borderWidth: 2,
        borderColor: '#ffff',
        borderRadius: 25,
        backgroundColor: '#ffff'
    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnTexto: {
        fontSize: 18,
        fontWeight: 'bold'
      }
})