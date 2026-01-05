import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Aprendendo a exibir imagem</Text>
      <Image
        source={{ uri: "https://www.devmedia.com.br/favicon.png " }}
        style={styles.img}
      />
      <Text>Logo da DevMedia</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 22,
  },
  img: {
    marginTop: 20,
    marginBottom: 10,
    width: 150,
    height: 150,
  },
});
