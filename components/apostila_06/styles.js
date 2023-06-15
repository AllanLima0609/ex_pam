import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      justifyContent: 'center',
      backgroundColor: '#EEE',
      padding: 8,
    },
    content: {
      flex: 1,
     flexDirection:'row',
      justifyContent: 'center',
      backgroundColor: '#FF80AB',
      padding: 10,
    },
    paragraph: {
      margin: 6,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center', 
      color: '#C51162', 
    },
    txtSaida: {
      margin: 6, 
      fontSize: 22, 
      fontWeight: 'bold', 
      textAlign: 'center', 
      color: '#E91E63',     
    }, 
    txtEntrada: {
      borderWidth: 4, 
      textAlign: 'center', 
      fontSize: 22, 
      borderColor: '#E91E63', 
      height: 50, 
      color: '#E53935', 
      borderRadius: 10, 
      marginTop: 20, 
      width: '80%',
    }, 
    button: {
      backgroundColor: '#89FFA5', 
      
    }, 
    butonText: {
      alignSelf:  'center',
      padding: 30,
      fontSize: 25, 
      color: '#6DC4A4', 
      fontWeight: 'bold',
    }, 
    textLabel: {
      fontSize: 16, 
      fontWeight: 'bold', 
      color: '#C51162',     
    }, 
    
    btnButton:{
     
      backgroundColor: '#E91E63', 
      height: 40, 
      fontSize: 6,
      justifyContent: 'center', 
      borderRadius: 10, 
      marginTop: 20,
      width: '20%',
      margin: 5,
    },
    txtLeft: {
      fontSize: 20,
      marginTop: 50,
      color: '#E91E63',
    },
    entradaImc: {
      flex: 1,
      flexDirection: 'row',
    },
    input: {
      height : 80,
      textAlign: 'center',
      width: '50%',
      fontSize: 50,
      marginTop: 24,
      color: 'lightGray',
    },
    resultados: {
      alignSelf: 'center',
      color: 'lightGray',
      fontSize: 65,
      padding: 15,
    },


  });
  
  export default styles;