import React from 'react';
import { Text, View, TextInput, Pressable, } from 'react-native';
import { Image } from 'expo-image';
import { CiMail } from "react-icons/ci";
import styles from '@/styles/Login';
//import Button from '@/componentes/Button';
//import { Link } from 'expo-router';

//IMAGENS
const logo = require('@/assets/images/logoAUTONOMUS.png');
const nome = require('@/assets/images/nomeLogo.png');
const personagem = require('@/assets/images/CharacterLogin.png');





export default function Login() {
    const {email, onChangeEmail} = React.useState('Email');
    const {senha, onChangeSenha} = React.useState('senha');

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={logo} style={styles.logo} />
                <Image source={nome} style={styles.nome} />
            </View>
            <View style={styles.view2container}>
                <Image source={personagem} style={styles.personagem}/>
            </View>

            <View style = {styles.view3container}>
                <TextInput style= {styles.input} 
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
                />
                <TextInput style= {styles.input} 
                onChangeText={onChangeSenha}
                value={senha}
                placeholder="Senha"
                />
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>ENTRAR</Text>
                    </Pressable>
                </View>
            </View>
          

        <View>

        </View>
        </View>
    );
}
