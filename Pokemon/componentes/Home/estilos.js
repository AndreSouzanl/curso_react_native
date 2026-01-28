import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontWeight:'700'
  },
  imagem: {
    width: 300,
    height: 100,
    marginBottom: 20,
  },
  titulo:{
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
    marginHorizontal: 15
  },
  texto: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default estilos;
