import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
//import Button from '@/componentes/Button';
import { Link } from 'expo-router';
import styles from '@/styles/IndexStyle';

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
