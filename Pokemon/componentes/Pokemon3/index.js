import { View, Text, Image } from "react-native";

import estilos from "../Home/estilos";
import pokemon from "../../assets/charmander.png";

export default function TelaPokemon3() {
  return (
    <View style={estilos.container}>
      <Image source={pokemon} style={estilos.imagem} resizeMode="contain" />
      <Text style={estilos.titulo}>Charmander</Text>
      <Text style={estilos.texto}>Pokémon tipo fogo.</Text>
    </View>
  );
}
