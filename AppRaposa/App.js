import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Img from './assets/raposa.png';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Raposa</Text>
      <Text style={styles.texto}>Mamifero da família Canidae</Text>
      <Image source={Img} style={styles.img} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#4530b2'
  },
  titulo:{
    color:'#fff',
    fontSize:22,
  },
  texto:{
    color:'#a7abff'
  },
  img:{
    marginTop:20,
    width:150,
    height:200,
    
  }
});


