import React from "react";
import { Image } from "expo-image";
import { Pressable, Text, TextInput, View } from "react-native";
//import { CiMail } from "react-icons/ci";
import styles from "@/styles/LoginStyles";
//import Button from '@/componentes/Button';
//import { Link } from 'expo-router';

//IMAGENS
const logo = require("@/assets/images/logoprestador.png");
//const nome = require("@/assets/images/nomeLogo.png");
const personagem = require("@/assets/images/CharacterLogin.png");

export default function Login() {
  const { email, onChangeEmail } = React.useState("Email");
  const { senha, onChangeSenha } = React.useState("senha");

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Image source={logo} styles={styles.logo}></Image>
       
        <Text styles={styles.nome}>AUTONOM 
          <Text styles={styles.us}> US </Text> 
        </Text>
      </View>
      
      <View style={styles.view2container}>
        <Image source={personagem} style={styles.personagem} />
      </View>

      <View style={styles.view3container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSenha}
          value={senha}
          placeholder="Senha"
        />
        <View style={styles.forgotContainer}>
          <Pressable style={styles.forgotBTN}>
            <Text style={styles.forgot}>ESQUECI MINHA SENHA</Text>
          </Pressable>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.text}>ENTRAR</Text>
          </Pressable>
        </View>
      </View>

      <View></View>
    </View>
  );
}
