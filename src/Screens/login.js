import { useNavigation } from '@react-navigation/core';
import { SafeAreaView, StyleSheet, Text, View, Image,
        TextInput, ActivityIndicator } from 'react-native';

import React, { useEffect, useState } from 'react';

import { FIREBASE_AUTH } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { ButtonGrande } from '../Components/buttonGrande';

// img
import Logo from './../../assets/blue.png';

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const auth = FIREBASE_AUTH;

    const navigation = useNavigation();

    const signIn = async () => {
        setLoading(true);
        if (email !== '' || password !== '') {
            try {
                const response = await signInWithEmailAndPassword(auth, email, password);
                console.log(response);
                navigation.navigate('Home')
            } catch (error) {
                console.log(error);
                alert('O Login falhou: ' + error.message);
            } finally {
                setLoading(false);
            }
        }
        else {
            alert('É preciso informar um email que já tenha cadastro.')
            return;
        }

    }

    function funcaoCadastro () {
        navigation.navigate('Cadastro')
    }


    function funcaoRedefinir () {
        navigation.navigate('Redefinir')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={Logo} style={styles.logoview}/>
            </View>
            <View>
                <Text style={styles.text}>Viagens.com{"\n"}Login</Text>
            </View>

            <TextInput placeholder='Email'
                        heyboardType='email-address'
                        autoCapitalize='none'
                        value={email} // capturar o que foi digitado
                        onChangeText={text => setEmail(text)} // onchange transfere para a variável setEmail
                        style={styles.input} />

            <TextInput placeholder='Password'
                        autoCapitalize='none'
                        value={password}
                        onChangeText={text => setPassword(text)} // onchange transfere para a variável setPassword
                        style={styles.input} 
                        secureTextEntry={true} />
            
            
            <View style={styles.espacoButton}>
                <ButtonGrande
                    title='Fazer Login'
                    onPress={signIn} />


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