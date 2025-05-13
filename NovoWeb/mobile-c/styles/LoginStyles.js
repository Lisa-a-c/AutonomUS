import { StyleSheet } from 'react-native';



export default StyleSheet.create({
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
    //Blur

    personagem: {
        width: 240,
        height: 198,
        contentFit: 'contain',
        ImageContentPosition: 'center',
    },
    
    blurContainer: {
        borderRadius: 200,
        padding:30,
        justifyContent: 'center',
        alignContent: 'center',
        flex: 2,
        backgroundColor: '#C8593D',

    },


    //VIEW 3

    view3container: {
        alignContent: 'center',
        alignItems: 'center',
        flex: 6/2,
    },
    input: {
        width: 327,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },

    //BOTAO
    buttonContainer:{
        //flex: 1/2,
        //flexDirection: "column",
        alignItems: 'center',
        justifyContent:'center',
        padding: 20,
    },
    button: {
        
        borderRadius: 10,
        width: 327,
        height: 52,
        backgroundColor: '#C8593D',
        color: '#000',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
    },
    //RECUPERAR SENHA
    
    forgotContainer: {
        flex:1,
        alignItems: 'end',
    },
    forgot: {
        fontWeight:'bold',
        color:'#C8593D',
        
    },
})