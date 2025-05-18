import React from "react";
import {View,TextInput, Image, Text} from "react-native";
import styles from '@/styles/InicialStyle';

//IMAGENS
const bell = require("@/assets/images/notification.png");

export default function Inicial(){
    const [pesquisa, setpesquisa] = React.useState("");
    return(
        <View style={styles.container}>
            <View className='pesquisar' style={styles.pesquisaContainer}>
                <TextInput
                style={styles.inputPesquisa}
                placeholder="Pesquise uma categoria"
                onChangeText={setpesquisa}
                value={pesquisa}
                />
                <Image source={bell} style={styles.bellimg}></Image>
            </View>

            <View className="body" style={styles.body}> 
                <View style={styles.view1}>
                    <Text style={styles.text}>Nossas ferramentas</Text>
                </View>
            </View>
        </View>
    );
}