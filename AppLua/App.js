import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

import Lua from "./assets/lua.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Lua} style={styles.img} />
      <View style={styles.boxTexto}>
        <Text style={styles.titulo}>Lua</Text>
        <Text style={styles.texto}>
          A Lua é o satélite natural do<Text style={styles.destaque}>, planeta Terra</Text>, distanciados
          por aproximadamente 384.405 km.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 30,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  boxTexto: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: "dotted",
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  titulo: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    
  },
  texto: {
    color: "#fff",
    textAlign: "center",
  },
  destaque: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
