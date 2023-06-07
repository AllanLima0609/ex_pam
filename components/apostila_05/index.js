import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
function Apostila05(){
  const[n1,setN1]= useState(0);
  const[n2, setN2]=useState(0);
  const[result, setResult] =useState(0);
  
  function soma(){
    const soma = parseInt(n1) + parseInt(n2);
    setResult(soma.toString());
    }
  function sub(){
    
    const sub = parseInt(n1) - parseInt(n2);
    setResult(sub.toString());
    }
  function produto(){
    const produto = parseInt(n1) * parseInt(n2);
    setResult(produto.toString());
    }  
  function divisao(){
    const divisao = parseInt(n1) / parseInt(n2);
    setResult(divisao.toString());
    }
  
  function zeraConta(){
    setResult(0);
    setN1(0);
    setN2(0);
  }
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Exemplo 04</Text>
      <Text style={styles.txtSaida}>
         calculadora básica
         </Text>
      <Text style={styles.txtLeft}>
          1º Número
         </Text>
      <TextInput  
      style={styles.txtEntrada}
      onChangeText={(e) => setN1(e)}
      value={n1}
      />


      <Text style={styles.txtLeft}>
         2º Número
         </Text>
      <TextInput 
      style={styles.txtEntrada}
      onChangeText={(i) => setN2(i)}
      value={n2}
      />   
      <Text style={styles.txtLeft}>
     resultado
      </Text>
   <TextInput 
   style={styles.txtEntrada}
   editable={false}
   value={result}
   />

      <View style={styles.content}>

      <TouchableOpacity style={styles.btnButton}
      onPress={()=> soma()}>
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnButton}
      onPress={()=> sub()}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btnButton}
      onPress={()=> produto()}>
        <Text style={styles.textButton}>*</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btnButton}
      onPress={()=> divisao()}>
        <Text style={styles.textButton}>/</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}
      onPress={()=> zeraConta()}>
        <Text style={styles.textButton}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Apostila05;