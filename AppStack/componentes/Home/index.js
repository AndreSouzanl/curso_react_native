import { View, Text, Button } from "react-native";

import estilos from "../styles";

export default function TelaHome(props) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Tela Home</Text>
      <Text style={estilos.subtitulo}>Bem vindo ao nosso App</Text>

      <View style={estilos.buttonBox}>
        <Button
          title="Descricão"
          onPress={() => {
            props.navigation.navigate("Descrição");
          }}
        />
      </View>
    </View>
  );
}
