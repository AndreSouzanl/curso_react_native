import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container:{
   flex: 1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#e1e3e4'
  },
  boxContainer:{
   width: 320,
   backgroundColor:'#fff',
   padding: 10,
   borderRadius: 5,
   borderColor: '#979797',
   borderWidth: 1
  },
  titulo:{
   textAlign:'center',
   fontSize: 26,
   fontWeight:'bold',
   marginBottom: 10
  },
  subtitulo:{
   textAlign:'center',
   marginBottom: 20
  },
  botoes:{
    marginBottom: 10
  },
  imagem:{
    width: 300,
    height: 200,
    marginBottom: 20
  }
});

export default estilos