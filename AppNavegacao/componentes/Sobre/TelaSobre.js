import { View, Text, Button } from "react-native";

import estilos from '../styles'

export default function TelaSobre(props) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Toque no botão abaixo para abrir o menu lateral</Text>
      <View style={estilos.buttonBox}>
        <Button
          title="Tela Inicial"
          onPress={() => {
            props.navigation.navigate("Tela Inicial");
          }}
        />
      </View>
    </View>
  );
}
