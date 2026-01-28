import { View, Text, Image } from "react-native";

import pokemon from "../../assets/squirtle.png";
import estilos from "../Home/estilos";

export default function TelaPokemon2() {
  return (
    <View style={estilos.container}>
      <Image source={pokemon} style={estilos.imagem} resizeMode="contain" />
      <Text style={estilos.titulo}>Squirtle</Text>
      <Text style={estilos.texto}> Pokémon tipo água. </Text>
    </View>
  );
}
