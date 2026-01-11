import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./componentes/Topo";
import Conteudo from "./componentes/Conteudo";

export default function App() {
  return (
    <View style={estilos.containerTopo}>
      <Topo />
      <Conteudo />
    </View>
  );
}

const estilos = StyleSheet.create({
  containerTopo: {
    flex: 1,
  },
});
