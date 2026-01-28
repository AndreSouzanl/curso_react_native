import { View, Text, Button } from "react-native";

import estilos from "../styles";

export default function TelaHome(props) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Tela Inicial</Text>

      <Text style={estilos.texto}>
        Toque nos botões abaixo para navegar pelas rotas do aplicativo
      </Text>
      <View style={estilos.buttonBox}>
        <Button
          title="Tela Contato"
          onPress={() => {
            props.navigation.navigate("Contato");
          }}
        />
      </View>
      <View style={estilos.buttonBox}>
        <Button
          title="Tela Sobre"
          onPress={() => {
            props.navigation.navigate("Sobre");
          }}
        />
      </View>
    </View>
  );
}                                                                                                                                                                                                                                                                 +
