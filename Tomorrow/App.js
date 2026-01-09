import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";

import estilos from "./styles/estilos";

import capa from "./assets/capa.png";

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Guerra do Amanhã</Text>
      <Text style={estilos.descricao}>Gêneros: Ação e ficção</Text>
      <Image source={capa} style={estilos.img} />
      <StatusBar style="auto" />
    </View>
  );
}

