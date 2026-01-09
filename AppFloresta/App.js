import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";

import estilos from "./styles/estilos";

import Congo from "./assets/imagem/floresta-congo.png";
import Taiga from "./assets/imagem/floresta-taiga.png";
import Amazonica from "./assets/imagem/floresta-amazonica.png";

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Floresta pelo mundo</Text>

      <Image source={Congo} style={estilos.img} />
      <Text style={estilos.margem}>Floresta do congo (África)</Text>

      <Image source={Taiga} style={estilos.img} />
      <Text style={estilos.margem}>Floresta (Hemisfério Norte)</Text>

      <Image source={Amazonica} style={estilos.img} />
      <Text style={estilos.margem}>Floresta Amazônica (América do Sul)</Text>

      <StatusBar style="auto" />
    </View>
  );
}
