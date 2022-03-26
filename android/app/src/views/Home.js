import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'



function Home ({ navigation }){
    return(
            <View style={styles.container}>
                <View style={styles.textoHome}>
                    <View >
                        <Image style={{width: 130, height: 100}} source={require('../assets/img/logopsbranca.png')}/>
                    </View>
                    <Text style={styles.estiloTextoHome}>Bem-vindo(a) ao </Text>
                    <Text style={styles.estiloTextoHome}>Preistaixion App  </Text>
                </View>
                <View style={{alignItems: 'center', paddingBottom: 50}}>
                    <Text style={{
                        color: '#ffff',
                        fontSize: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: 15
                    }}>Vamos lá!</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
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

// class Home extends Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//         )
//     }
// }

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0d0082',
        flex: 1
    },
    logops:{
        flex: 1
    },
    textoHome: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    estiloTextoHome: {
        fontSize: 28,
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