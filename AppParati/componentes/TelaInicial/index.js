import { View, Text, Button, Image } from "react-native";

import logo from "../../assets/01.png";
import estilos from "./estilos";

export default function TelaInicial(props) {
  return (
    <View style={estilos.container}>
      <View style={estilos.boxContainer}>
        <Text style={estilos.titulo}>Parati</Text>
        <Text style={estilos.subtitulo}>Sabia o que Visitar em paraty.</Text>

        <Image source={logo} style={estilos.imagem} />
        <View style={estilos.botoes}>
          <Button
            title="Ver Restaurantes"
            onPress={() => {
              props.navigation.navigate("Restaurante");
            }}
            color={'#372d00'}
          />
        </View>
        <View style={estilos.botoes}>
          <Button
            title="Ver Passeios"
            onPress={() => {
              props.navigation.navigate("Passeios");
            }}
            color={'#372d00'}
          />
        </View>
        <View style={estilos.botoes}>
          <Button
            title="Ver Hospedagem"
            onPress={() => {
              props.navigation.navigate("Hospedagem");
            }}
            color={'#372d00'}
          />
        </View>
      </View>
    </View>
  );
}
