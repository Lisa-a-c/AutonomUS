import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { Image, ImageBackground } from "expo-image";
//import { CiMail } from "react-icons/ci";
import styles from "@/styles/LoginStyles";
//import Button from '@/componentes/Button';
import { Link } from "expo-router";

//IMAGENS
const logo = require("@/assets/images/Logo.png");
const nome = require("@/assets/images/Nome.png");
const personagem = require("@/assets/images/CharacterLogin.png");
const blur = require("@/assets/images/Blur.png");

export default function Login() {
  const { email, onChangeEmail } = React.useState("Email");
  const { senha, onChangeSenha } = React.useState("senha");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logo} />
        <Image source={nome} style={styles.nome} />
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

        <Link href="/esqueciSenha" asChild>
          <View style={styles.forgotContainer}>
            <Pressable style={styles.forgotBTN}>
              <Text style={styles.forgot}>ESQUECI MINHA SENHA</Text>
            </Pressable>
          </View>
        </Link>

        <View className="Button" style={styles.btnContainer}>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
              <Text style={styles.text}>ENTRAR</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View></View>
    </View>
  );
}
