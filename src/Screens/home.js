import * as React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground,
     Text, TextInput, View, Image, ScrollView, TouchableOpacity,
        } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { FIREBASE_AUTH } from '../firebase';
import { signOut } from 'firebase/auth';

// img
import Logo from './../../assets/blue.png';
import floresta from './../../assets/florestas.jpg';
import praia from    './../../assets/praias.jpg';
import montanha from    './../../assets/montanhas.jpg';
import fundo from './../../assets/fundo.jpg';

import { ButtonGrande } from '../Components/buttonGrande';

const Home = () => {

    const navigation = useNavigation();

    const auth = FIREBASE_AUTH;
    
    const metodoSair = async () => {
        try {
            const response = await signOut(auth)
            .then(() => {
                alert('Voce se desconectou');
                navigation.navigate('Login')
            })
        } catch (error) {
            console.log(error);
            alert('falhou: ' + error.message);
        } 
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <ImageBackground
                    source={fundo}
                    style={styles.imageBackground}
                    resizeMode="cover"             
                >
                    <TextInput placeholder='Search' 
                                style={styles.input}
                    />
                    
                    <Text style={styles.mainTitle}>EXPLORE{"\n"}NATURE</Text>
                </ImageBackground>

                <View style={styles.imageContainer} >
                
                    <TouchableOpacity style={styles.imageBox}>
                        <Image source={floresta} style={styles.image} />
                        <Text style={styles.imageText}>Forest</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.imageBox}>
                        <Image source={praia} style={styles.image} />
                        <Text style={styles.imageText}>Beaches</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.imageBox}>
                        <Image source={montanha} style={styles.image} />
                        <Text style={styles.imageText}>Mountains</Text>
                    </TouchableOpacity>

                </View>
            
                <View style={styles.espacoButton}>
                    <ButtonGrande
                        title='Logout'
                        onPress={metodoSair}
                    />
                </View>
            
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>Know more</Text>

                <View style={styles.footerLinks}>
                    <Text style={styles.footerLink}>About the company</Text>
                    <Text style={styles.footerLink}>Common questions</Text>
                </View>
            </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
    },

    imageBackground: {
        flex: 1,
        width: '100%',
        height: 402,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainTitle: {
        fontSize: 40,
        color: 'white',
        marginTop: 150,
        fontWeight: 'bold',
    },

    imageContainer: {
        flexDirection: 'column',
        marginTop: 20,
        justifyContent: 'space-around',
    },

    imageBox: {
        marginTop: 35,
        width: 160,
        height: 195,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
    },

    image: {
        width: 160,
        height: 152,
        borderRadius: 7,
    },

    imageText: {
        fontSize: 18,
        margin: 10,
        textAlign: 'center',
    },

    footer: {
        height: 90,
        width: '100%',
        backgroundColor: '#222',
        paddingTop: 20,
        flexDirection: 'column',
    },

    footerTitle: {
        color: 'white',
        fontSize: 18,
        marginLeft: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },

    footerLinks: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    footerLink: {
        color: 'white',
        paddingBottom: 15,
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
        marginTop: 40,
        width: '75%',
    },

    espacoButton: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    logoview: {
        width: 150,
        height: 150,
    },
});