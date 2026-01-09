import { Image, StyleSheet, Text, View } from "react-native";

import mobileImg from "./assets/mobile-img.png";
import BackendImg from "./assets/backend-img.png";
import FullStackImg from "./assets/fullstack-img.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Mobile Developer</Text>
        <Text style={styles.texto}>Michonne Hawthorne</Text>
        <Image source={mobileImg} style={styles.img} />
      </View>
      <View style={styles.card}>
        <Text style={styles.titulo}>Backend Developer</Text>
        <Text style={styles.texto}>Elijah Price / Mr Glass</Text>
        <Image source={BackendImg} style={styles.img}  />
      </View>
      <View style={styles.card}>
        <Text style={styles.titulo}>Full Stack Developer</Text>
        <Text style={styles.texto}>Chuck Norris</Text>
        <Image source={FullStackImg} style={styles.img}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbe9f8",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#5450d6",
    width: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#2d1f76",
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 20,
  },

  titulo: {
    color: "#fff",
    fontSize: 18,
  },

  texto: {
    color: "#a7abff",
    marginBottom: 10,
  },

  img:{
    width: 50,
    height: 50,
    borderRadius: 75,
    borderColor:'#fff',
    borderWidth: 2,
  }
});
