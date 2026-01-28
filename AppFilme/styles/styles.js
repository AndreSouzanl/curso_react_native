import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    padding: 10
  },
  boxDescricao: {
    alignItems: "center"
  },

  titulo: {
    color: '#f3e344',
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '700',
    textAlign: "center"
  },
  textos: {
    color: '#f3e344',
    fontSize: 16,
    marginBottom:3,
    textAlign: "center"
  },

  imagem: {
    width: 200,
    height: 200,
    marginBottom: 5
  },

  boxBotoes: {
    width: 200,
    flexDirection: 'row',
    justifyContent: "space-between"
  },

  tela: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    padding: 20,
    gap: 20
  },
});

export default styles;