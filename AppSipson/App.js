import { React }from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

import Img from './assets/bart-img.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Os Simpsons</Text>
      <Image source={Img} style={styles.img} />
      <Text>Bart o filho mais velho</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#feda0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color:'#000',
    fontSize:32,
    marginBottom:20
  },
  texto:{
    color:'#000',
    fontSize:20,
    marginBottom:20
  },
  img:{
    width:150,
    height:150,
    marginBottom:10,
    borderRadius:75,
    borderColor: '#000',
    borderWidth:2
}

});

