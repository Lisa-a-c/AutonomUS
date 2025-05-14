import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    //GERAL

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //HEADER

    headerContainer: {
        padding: 30,
        flex: 1,
        flexDirection: "row",
        alignItems: 'start',
        contentFit: 'top',
        
    },
    logo: {
        width: 25,
        height: 20.45,
        contentFit: 'contain',

    },
    nome: {
        width: 90,
        height: 20.45,
        contentFit: 'contain',
        ImageContentPosition: 'center',
    },

    //VIEW IMG 

    viewimg: {
        flex: 10/2,
        alignContent:'center',
        alignItems: 'center',
    },
    introducao:{
        width: 372,
        height: 205,
        contentFit: 'contain',
    },

    //VIEW INTRODUCAO
    ViewIntro:{
       flex:1,
    },
    titulo: {
        color: '#FFC100',
    },
    texto: {
        color: '#36394A',
        fontFamily: 'Poppins, Regular',
        fontSize:16,
    },

    //VIEW BUTTON

    btnContainer:{
        flex: 4/4,
        alignItems: 'center',
        justifyContent:'center',
        padding: 20,
    },
    button: {
        borderRadius: 10,
        width: 327,
        height: 52,
        backgroundColor: '#FFC100',
        color: '#000',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
    },
})