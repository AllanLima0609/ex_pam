import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
function Apostila06(){
  const[peso,setPeso]= useState(0);
  const[altura, setAltura]=useState(0);
  const[result, setResult] =useState(0);
 
  function IMC(){
    const Calcular = peso / (altura * altura);
    setResult(Calcular);
    }
  function grau(){if (result <= 18.5) {
   return('Abaixo do Peso')
  } else if (result > 18.5 && result <=24.9) {
    return('Peso Normal')
  } else  if (result > 24.9 && result <=29.9) {
    return('Sobrepeso')
  } else  if (result > 29.9 && result <=34.9) {
    return('Obesidade Grau 1')
  } else  if (result > 34.9 && result <=39.9) {
    return('Obesidade Grau 2')
  } else  if (result > 39.9) {
    return('Obesidade Grau 3')
  }}
    

      
  
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Exemplo 06</Text>

      <View style={styles.entradaImc}>
      <TextInput placeholder='MASSA'
    keyboardType='numeric'  
      style={styles.input}
     onChangeText={(entrada) => setPeso(entrada)}

      />
        <TextInput  
      placeholder='ALTURA'
      keyboardType='numeric'  
        style={styles.input}
       onChangeText={(entrada) => setAltura(entrada)}
  
      
      />
     
         </View>
         <TouchableOpacity style={styles.button}
      onPress= {() => IMC()}>
        <Text style={styles.butonText}> Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultados}>
         {result.toFixed(2)}
         </Text>
         <Text style={styles.txtSaida}>
         {grau()}
         </Text>
   

    </View>
  );
}
export default Apostila06;