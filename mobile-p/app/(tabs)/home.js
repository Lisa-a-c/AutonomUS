import styles from '@/styles/homeStyles.js';
import React from 'react';
import { TextInput } from 'react-native';
import { View } from 'react-native-web';

export default function home(){
    const { busca, onChangeBusca } = React.useState("busca");
    return(
        
        <View styles={styles.container}>
            <View class="busca">
                <TextInput>
                style={styles.input}
                onChangeText={onChangeBusca}
                value={busca}
                placeholder="Pesquise uma categoria"
                </TextInput>
            </View>
            <View class="body">

            </View>
            <View class="footer">

            </View>
        </View>
    );
}