import { View, Text, Image } from "react-native";

import Capa from "../../assets/capa.png";
import estilos from "./estilos";

export default function Home() {
  return (
    <View style={estilos.container}>
      <Image source={Capa} style={estilos.imagem} resizeMode="contain" />
      <Text style={estilos.titulo}>
         Conhecendo os 3 Pokémons iniciais da primeira temporada
      </Text>
      <Text style={estilos.texto}>
        Arraste o dedo da esquerda pra direita para abrir o menu lateral.
      </Text>
    </View>
  );
}
