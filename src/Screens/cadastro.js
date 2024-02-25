import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image,
        TextInput, ActivityIndicator } from 'react-native';

import { ButtonGrande } from '../Components/buttonGrande';

import { FIREBASE_AUTH } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

// img
import Logo from './../../assets/blue.png';

const Cadastro = () => {

    const navigation = useNavigation();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    
    const auth = FIREBASE_AUTH;

    const signUp = async () => {
        setLoading(true);
        if (email === '' || password === '') {
            try {
                const response = await createUserWithEmailAndPassword(auth, email, password);
                console.log(response);
                alert('Cadastrado com Sucesso! Agora, faça seu login:');
                navigation.navigate('Login')
            } catch (error) {
                console.log(error);
                alert('falhou: ' + error.message);
            } finally {
                setLoading(false);
            }
        }
        else {
            alert('É preciso informar um email e uma senha')
            return;
        }
        

    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={Logo} style={styles.logoview}/>
            </View>

            <View>
                <Text style={styles.text}>Viagens.com{"\n"}Cadastro</Text>
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
                { loading ? <ActivityIndicator size="large" color="#000ff1" /> 
                : <>
                    <ButtonGrande
                        title='Criar Conta'
                        onPress={signUp}
                    />
                </> }

            </View>

        </SafeAreaView>
    );

}

export default Cadastro;

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