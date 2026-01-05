import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Hello World</Text>
      <Text>Criado Por DevSouza Jan 2026</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    backgroundColor:'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  texto: {
    marginTop: 20,
    fontSize: 20,
  },
});
