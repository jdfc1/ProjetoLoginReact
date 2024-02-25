import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image,
        TextInput } from 'react-native';

// component
import { ButtonGrande } from '../Components/buttonGrande';

import { FIREBASE_AUTH } from '../firebase';
import { sendPasswordResetEmail } from "firebase/auth";

// img
import Logo from './../../assets/blue.png';

const Redefinir = () => {

    const [ email, setEmail ] = useState('');
    const auth = FIREBASE_AUTH;

    const navigation = useNavigation();

    const handleRedefini = async () => {
        if (email !== ''){
            try {
                const response = await sendPasswordResetEmail(auth, email)
                console.log(response);
                alert('verifique seu email! e recupere a senha');
                navigation.navigate('Login')
            } catch (error) {
                console.log(error);
                alert('falhou: ' + error.message);
            } finally {
        
            }
            
            
            
        } else {
            alert('É preciso informar o mesmo email cadastrado na plataforma anteriormente.')
            return;
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={Logo} style={styles.logoview}/>
            </View>
            <View>
                <Text style={styles.text}>
                    Viagens.com{"\n"}Redefinir Senha
                </Text>
            </View>
            

            <TextInput placeholder='Email'
                        heyboardType='email-address'
                        style={styles.input} />
            
            <View style={styles.espacoButton}>
                <ButtonGrande
                    title='Redefinir'
                    onPress={handleRedefini}
                />

            </View>

        </SafeAreaView>
    );

}

export default Redefinir;

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