import { StyleSheet } from 'react-native';

export default StyleSheet.create({ 
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#A0CEE1',
    },
    pesquisaContainer: {
      flex:1/10,
      width:'100%',
      backgroundColor: '#A0CEE1',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputPesquisa:{
      width:282,
      height:38,
      backgroundColor: '#fff',
      borderRadius: 8,
      fontSize:10,

    },
    bellimg: {
      width:35,
      height:35,
      contentFit: 'contain',
    },
    body: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius:35,
      width: '100%',
    },
    view1: {
      flex:1/5,
      textAlign:'left',
    },
    text:{
      fontFamily: 'Poppins',
      fontSize: 12,
    }
 });