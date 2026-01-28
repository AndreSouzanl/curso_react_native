import { View, Text} from "react-native";

import estilos from "../styles";

export default function TelaDescricao(props) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Tela Descrição</Text>
      <Text style={estilos.subtitulo}>Esta é a tela de Descrição</Text>
    </View>
  );
}
