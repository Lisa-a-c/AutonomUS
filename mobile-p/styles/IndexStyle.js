import { StyleSheet } from 'react-native';


// Design 
export default StyleSheet.create({
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
    imageContainer: {
      flex: 1/2,
      flexDirection: "column",
      alignItems: 'center',
      contentFit: 'center',
    },

    //NOME
    nome: {
      display:'flex',
      width:269,
      height:52,
      color: '#000',
      font: 'Inter',
      fontSize: 40,
    },
    us:{
      color: '#FFC100',
      font: 'Inter',
      fontSize: 40,
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