import { View, Text, Button, Image } from "react-native";
import logo from "../../assets/logo.jpg";
import styles from "../../styles/styles";


export default function TelaInicial(props) {
  return (
    <View style={styles.tela}>
      <Text>Star wars ordem cronológica</Text>
      <Image source={logo} style={styles.imagem} />

      <Text style={styles.titulo}>
        Você sabe qual é a ordem cronológica da franquia Star Wars?
      </Text>

      <Text style={styles.textos}>
        Os principais filmes da franquia estão divididos em e trilogias. Clique
        no botão a seguir para conferir.
      </Text>

      <Button
        title="Ver 1ª Trilogia"
        onPress={() => props.navigation.navigate("Tela1Trilogia")}
        color="#372d00"
      />
      <Button
        title="Ver 2ª Trilogia"
        onPress={() => props.navigation.navigate("Tela2Trilogia")}
        color="#372d00"
      />
      <Button
        title="Ver 3ª Trilogia"
        onPress={() => props.navigation.navigate("Tela3Trilogia")}
        color="#372d00"
      />
    </View>
  );
}
