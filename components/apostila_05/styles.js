import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      justifyContent: 'center',
      backgroundColor: '#FF80AB',
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
      backgroundColor: '#E91E63', 
      height: 40, 
      justifyContent: 'center', 
      borderRadius: 10, 
      marginTop: 20, 
    }, 
    textButton: {
      fontSize: 22, 
      color: '#FF80AB', 
      textAlign: 'center', 
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
    }
  });
  
  export default styles;