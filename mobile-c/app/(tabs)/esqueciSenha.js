import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { Image, ImageBackground } from "expo-image";
//import { CiMail } from "react-icons/ci";
import styles from "@/styles/LoginStyles";
//import Button from '@/componentes/Button';
//import { Link } from 'expo-router';

//IMAGENS
const logo = require("@/assets/images/Logo.png");
const nome = require("@/assets/images/Nome.png");
const personagem = require("@/assets/images/CharacterEqueci.png");
const blur = require("@/assets/images/Blur.png");

export default function EsqueciSenha() {
  const { email, onChangeEmail } = React.useState("Email");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logo} />
        <Image source={nome} style={styles.nome} />
      </View>
      <View style={styles.view2container}>
        <ImageBackground source={blur} style={styles.blur}>
          <Image source={personagem} style={styles.personagem} />
        </ImageBackground>
      </View>
      <View style={styles.view3container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        />
        <Link href="/login" asChild>
          <View style={styles.forgotContainer}>
            <Pressable style={styles.forgotBTN}>
              <Text style={styles.forgot}>ESQUECI MINHA SENHA</Text>
            </Pressable>
          </View>
        </Link>

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
