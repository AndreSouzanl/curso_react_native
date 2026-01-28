import { View, Text, Image, Button } from "react-native";

import estilos from "../Home/estilos";

import pokemon from "../../assets/bulbasaur.png";

export default function TelaPokemon1() {
  return (
    <View style={estilos.container}>
      <Image source={pokemon} style={estilos.imagem} resizeMode="contain" />
      <Text>Bulbasaur</Text>
      <Text> Pokémon tipo planta e venenoso.</Text>

      <Button
        title="Toque Aqui"
        onPress={() => {
          console.log("Fui clicado");
        }}
      />
    </View>
  );
}
