import React from 'react';
import { Text, View, Pressable} from 'react-native';
import { Image } from 'expo-image';
import styles from '@/styles/Introstyle';
import { Link } from 'expo-router';

//IMAGENS
const logo = require('@/assets/images/logoAUTONOMUS.png');
const nome = require('@/assets/images/nomeLogo.png');
const introd = require('@/assets/images/EquipeIntro.png');

export default function intro(){
    return(
        <View  style={styles.container}>
           <View style={styles.headerContainer}>
                <Image source={logo} style={styles.logo} />
                <Image source={nome} style={styles.nome} />
            </View> 
            <View className='viewimg' style={styles.viewimg}>
                <Image source={introd} style={styles.introducao}/> 
            </View>
            <View style={styles.ViewIntro}>
            <Text style={styles.titulo}>Descubra novas oportunidades de trabalho</Text>
            <Text style={styles.texto}>Aqui você conecta suas habilidades diretamente com quem precisa dos seus serviços.
                 Crie seu perfil, destaque suas especialidades e começe a receber solicitações de clientes reais.</Text>
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