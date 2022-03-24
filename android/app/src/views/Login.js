import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'



function Login ({ navigation }) {
    return(
        <View style={{ flex: 1, }}>
            <View style={styles.areaLogoSonyBranco}>
                <Image style={styles.logoSonyBranco} source={require('../../assets/img/whiteSonyLogo.png')} />
                <View style={styles.areaVoltar}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View >
                            <Text style={styles.voltarTexto}>
                                X
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.logoSonyBrancoComFundoAzul}>
                <Image style={{ width: 40, height: 40 }} source={require('../../assets/img/logopsbranca.png')} />
                <Text style={{ paddingLeft: 12, color: 'white', fontSize: 26 }}>
                    Preistaixion
                </Text>
            </View>

                <View style={styles.posicaoLogin}>
                    <Text>
                        Inicie uma sessão no Preistaixion com uma das suas contas da Sony.
                    </Text>
                    <TextInput 
                        style={styles.inputDeLogin}
                        placeholder='ID de início de sessão (endereço de mail)'
                        underlineColorAndroid="transparent"
                        >
                    </TextInput>
                </View>

                <View style={styles.posicaoBotaoSeguinte}>
                    <TouchableOpacity style={styles.botaoSeguinte}>
                        <View style={styles.botaoSeguinteAre}>
                            <Text style={styles.botaoSeguinteTexto}>
                                Seguinte
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.recuperarSenha}>
                        <Text style={styles.recuperarSenhaTexto}>
                            Problemas ao iniciar uma sessão?
                        </Text>
                    </View>
                </View>
                
    </View>
    )
}
// class Login extends Component {

//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return 
//     }
// }

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    areaLogoSonyBranco: {
        flex: 0.09,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    areaVoltar:{
        flex: 1,
        alignItems: 'flex-end'
    },
    voltarTexto:{
        color: '#ffff',
        fontSize: 30
    },
    logoSonyBranco: {
        height: 15,
        width: 100,
    },
    logoSonyBrancoComFundoAzul: {
        flex: 0.15,
        flexDirection: 'row',
        backgroundColor: '#0d0082',
        alignItems: 'center',
        justifyContent: 'center',
    },
    posicaoLogin:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputDeLogin:{
        height: 35,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 18,
        padding: 5,
    },
    posicaoBotaoSeguinte:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
    },
    botaoSeguinte:{
        width: 300,
        height: 50,
        borderWidth: 2,
        backgroundColor: '#0d0082',
        borderColor: '#ffff',
        borderRadius: 25,
    },
    botaoSeguinteAre:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoSeguinteTexto:{
        fontWeight: 'bold',
        color: '#ffff',
        fontSize: 18,
    },
    recuperarSenha:{
        paddingTop: 10
    },
    recuperarSenhaTexto:{
        color: '#0d0082'
    }
})