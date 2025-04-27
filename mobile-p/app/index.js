import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
import Button from '@/componentes/Button';
import { Link } from 'expo-router';

const logo = require('@/assets/images/logoAUTONOMUS.png');
const nome = require('@/assets/images/nomeLogo.png');

// Estrutura da tela
export default function Index() {
  return (
    <View style={styles.container}> 
      
      <View style={styles.imageContainer}>
       <Image source={logo} style={styles.logo} />
       <Image source={nome} style={styles.nome} />
       <Text style={styles.text}>Sua ponte entre demanda e solução</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Link href="/login" asChild>
          <Pressable style={styles.button}>
            <FontAwesome name="arrow-right" size={35} color="#25292e" style={styles.buttonIcon} />   
          </Pressable>
       </Link>
      </View> 
      
    
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

   position: 'absolute',
   bottom: 0,
   left: 0,
   flex: 1 /4 ,
   
  },

  
  
  // Imagens 
  logo: {
    width: 159,
    height: 131,
    contentFit: 'contain',
  },
  nome: {
    width: 269,
    height: 52,
    contentFit: 'contain',
  },
  imageContainer: {
    flex: 1/2,
    flexDirection: "column",
    alignItems: 'center',
    contentFit: 'center',
  },

  //BOTAO-SETA
  
  buttonContainer:{
    //flex: 1/2,
    //flexDirection: "column",
    alignItems: "center",
    justifyContent:'center',
  },

buttonLabel: {
    color: '#fff',
    fontSize: 16,
},
buttonIcon: {
    paddingRight: 8,
},
});