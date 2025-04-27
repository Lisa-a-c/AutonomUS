import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
//import { Image } from 'expo-image';
//import Button from '@/componentes/Button';
//import { Link } from 'expo-router';

const logo = require('@/assets/images/logoAUTONOMUS.png');
const nome = require('@/assets/images/nomeLogo.png');

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={logo} style={styles.logo} />
                <Image source={nome} style={styles.nome} />
            </View>
        <View>

        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    text: {
        color: '#727272',
        fontSize: 15,
    },

    //HEADER

    logo: {
        width: 25,
        height: 20.45,
        contentFit: 'contain',
    },

    nome: {
        width: 90,
        height: 20.45,
        contentFit: 'contain',
    },

    imageContainer: {
        flex: '10%',
        flexDirection: "row",
        alignItems: 'center',
        contentFit: 'top',
        
    },
    
})