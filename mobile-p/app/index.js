import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const logo = require('@/assets/images/logoAUTONOMUS.png');
const nome = require('@/assets/images/nomeLogo.png');

// Estrutura da tela
export default function Index() {
  return (
    <View style={styles.container}> 
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.imageContainer}> 
        <Image source={nome} style={styles.nome} />
      </View>
      <Text style={styles.text}>Sua ponte entre demanda e solução</Text>
    </View>
  );
}

// Design 
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
  
  button: {
    fontSize: 20,
    color: '#FFC100',
    textDecorationLine: 'underline',
  },
  
  // Imagens 
  logo: {
    width: 159,
    height: 131,
  },
  nome: {
    width: 269,
    height: 52,
  },
  imageContainer: {
    flex: 1,
  },
});