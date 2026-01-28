import { View, Text, Button } from "react-native";

import estilos from "../styles";

export default function TelaContato(props) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Texto de Contato</Text>
      <View style={estilos.buttonBox}>
        <Button
          title="Tela Inicial"
          onPress={() => { props.navigation.navigate("Tela Inicial");
          }}
        />
      </View>
    </View>
  );
}
