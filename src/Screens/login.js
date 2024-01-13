import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image,
        TextInput } from 'react-native';

import { ButtonGrande } from '../Components/buttonGrande';

// img
import Logo from './../../assets/blue.png';

const Login = () => {

    const navigation = useNavigation();

    function funcaoCadastro () {
        navigation.navigate('Cadastro')
    }


    function funcaoRedefinir () {
        navigation.navigate('Redefinir')
    }

    function funcaoHome () {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={Logo} style={styles.logoview}/>
            </View>
            <View>
                <Text style={styles.text}
                >Login</Text>
            </View>

            <TextInput placeholder='Email'
                        heyboardType='email-address'
                        style={styles.input} />

            <TextInput placeholder='Password'
                        secureTextEntry
                        style={styles.input} />
            
            <View style={styles.espacoButton}>
                <ButtonGrande
                    title='Autenticar'
                    onPress={funcaoHome}
                />

                <ButtonGrande
                    title='Tela Fazer cadastro'
                    onPress={funcaoCadastro}
                />

                <ButtonGrande
                    title='Tela Redefinir'
                    onPress={funcaoRedefinir}
                />

            </View>

        </SafeAreaView>
    );

}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 26,
        textAlign: 'center',
    },

    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 6,
        width: '75%',
    },

    espacoButton: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    logoview: {
        width: 150,
        height: 150,
    },
});