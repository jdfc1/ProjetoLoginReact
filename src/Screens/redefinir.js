
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image,
        TextInput } from 'react-native';

// component
import { ButtonGrande } from '../Components/buttonGrande';

// img
import Logo from './../../assets/blue.png';

const Redefinir = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={Logo} style={styles.logoview}/>
            </View>
            <View>
                <Text style={styles.text}
                    >Redefinir
                </Text>
            </View>
            

            <TextInput placeholder='Email'
                        heyboardType='email-address'
                        style={styles.input} />
            
            <View style={styles.espacoButton}>
                <ButtonGrande
                    title='Redefinir'
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