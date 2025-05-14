import React from 'react';
import { Text, View, Pressable} from 'react-native';
import { Image } from 'expo-image';
import styles from '@/styles/Introstyle';
import { Link } from 'expo-router';

//IMAGENS
const logo = require('@/assets/images/logoprestador.png');
const nome = require('@/assets/images/nomeLogo.png');
const introd = require('@/assets/images/EquipeIntro.png');

export default function intro(){
    return(
        <View  style={styles.container}>
           <View style={styles.headerContainer}>
                <Image source={logo} style={styles.logo} />
                <Text styles={styles.nome}>AUTONOM 
                    <Text styles={styles.us}> US </Text> 
                </Text>
            </View> 
            <View className='viewimg' style={styles.viewimg}>
                <Image source={introd} style={styles.introducao}/> 
            </View>
            
            <View className='Button' style={styles.btnContainer}>
                <Link href="/login" asChild>
                    <Pressable style={styles.button}>
                       <Text style={styles.text}>Começar</Text>  
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}